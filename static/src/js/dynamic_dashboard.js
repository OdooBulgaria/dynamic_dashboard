openerp.dynamic_dashboard = function(instance, local) {
    var _t = instance.web._t,
        _lt = instance.web._lt;
    var QWeb = instance.web.qweb;
    instance.web.dynamic_dashboard = instance.web.dynamic_dashboard || {}

    instance.web.form.DashBoard.include({
    	init:function(view,node){
    		this._super(view,node);
    		this.info = {
    			"date_from":false,
    			"date_to":false,
				"hour_from":0,
    			"hour_to":0,
    		};
    		this.from = 0;
    		this.to = 0;
    	},
    	start:function(){
    		this._super();
    		var self = this;
    		if (this.view.dataset.context.dantunes_board){
    			$button = $(QWeb.render("DashBoard_Dantunes", {}));
    			$fields = $(QWeb.render("fields_dashboard_Dantunes", {}));
    			$button.appendTo(self.$el.find("div.oe_dashboard_links"));
    			$fields.appendTo(self.$el.find("div.oe_dashboard_links"))
    			$fields.on("change",function(event){
    				self.info[$(event.target)[0].id] = $(event.target)[0].value;
    	        	self.from = parseFloat(self.info.hour_from) || 0;
    	        	self.to = parseFloat(self.info.hour_to) || 0;    				
    				if (!(self.from >= 0 && self.from <= 24) || !(self.to >= 0 && self.to <= 24)){
    					self.do_notify ("Invalid Input","Check the hours field. It should be b/w 0 to 24 hours");
    					event.target.value = "0";
    				} 
    			})
    			this.$el.find('button.buttnon.oe_dashboard_link_refresh').click(this.on_refresh);
    		}
    	},
        on_refresh:function(){
        	var self = this;
        	if ((self.from <= self.to) && (self.info.date_from <= self.info.date_to)){
        		var models = new openerp.Model('dynamic.board.wizard').call('call_report',[
        		                                                                           	self.info.date_from,
        		                                                                           	self.info.date_to,
        		                                                                           	self.from,
        		                                                                           	self.to
        		                                                                           	],{}).then(function(){
        		                                                                           		self.do_reload();
        		                                                                           	})
        	}
        	else {
        		this.do_notify("Invalid Entry","FROM cannot be greater than TO in HOURS and DATE fields");
        	}
        	
        },    	
    });
}
