# -*- coding: utf-8 -*-
##############################################################################
#
#    OpenERP, Open Source Management Solution
#    Copyright (C) 2004-2010 Tiny SPRL (<http://tiny.be>).
#
#    This program is free software: you can redistribute it and/or modify
#    it under the terms of the GNU Affero General Public License as
#    published by the Free Software Foundation, either version 3 of the
#    License, or (at your option) any later version.
#
#    This program is distributed in the hope that it will be useful,
#    but WITHOUT ANY WARRANTY; without even the implied warranty of
#    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#    GNU Affero General Public License for more details.
#
#    You should have received a copy of the GNU Affero General Public License
#    along with this program.  If not, see <http://www.gnu.org/licenses/>.
#
##############################################################################

{
    'name': 'Dynamic Dashboard',
    'version': '0.1',
    'category': 'customization',
    'sequence':1,
    'summary': 'Customizations',
    'description': """
        Dynamic Dashoard
    
    """,
    'author': 'J & G Infosystems',
    'website': 'www.jginfosystems.com',
    'depends': ['base','sale'],
    'data': [
             "board_board.xml",
             "wizard/wizard_board_view.xml",
#              "dynamic_dashboard.xml"  #for version 8
             ],
    'demo': [],
    'test': [],
    'qweb':['static/src/xml/*.xml'],
    'js':['/dynamic_dashboard/static/src/js/dynamic_dashboard.js'],
    'css':['/dynamic_dashboard/static/src/css/dynamic_dashboard.css'],
    'installable': True,
    'auto_install': False,
    'application': True,
}
# vim:expandtab:smartindent:tabstop=4:softtabstop=4:shiftwidth=4: