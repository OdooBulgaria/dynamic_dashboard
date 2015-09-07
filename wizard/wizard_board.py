from openerp.osv import fields, osv

class dynamic_board(osv.osv_memory):
    _name = "dynamic.board.wizard"
    
    def call_report(self,cr,uid,date_from,date_to,hour_from,hour_to,context=None):
        print "====================================",date_from,date_to,hour_from,hour_to,context
        return True
    
    _columns = {
                'order_id':fields.integer("Enter Date for filtering")
                }