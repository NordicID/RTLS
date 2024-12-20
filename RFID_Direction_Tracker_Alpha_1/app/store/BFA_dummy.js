/*
 * File: app/store/BFA_dummy.js
 *
 * This file was generated by Sencha Architect version 4.3.6.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 7.8.x Modern library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 7.8.x Modern. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('RFID_Tag_Locator_Service.store.BFA_dummy', {
    extend: 'Ext.data.Store',

    requires: [
        'RFID_Tag_Locator_Service.model.BFAs',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Array'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'BFA_dummy',
            model: 'RFID_Tag_Locator_Service.model.BFAs',
            data: [
                {
                    id: 1,
                    display_name: 'Zone1',
                    x_loc: 1.5,
                    y_loc: 1.5,
                    tx_level: 1585,
                    status: true,
                    ip_address: '192.168.0.110',
                    area: 'sales area'
                },
                {
                    id: 2,
                    display_name: 'Zone2',
                    x_loc: 1.5,
                    y_loc: 3.5,
                    tx_level: 1000,
                    status: true,
                    ip_address: '192.168.0.111',
                    area: 'sales area'
                },
                {
                    id: 3,
                    display_name: 'Zone3',
                    x_loc: 3.5,
                    y_loc: 1.5,
                    tx_level: 1585,
                    status: true,
                    ip_address: '192.168.0.112',
                    area: 'sales area'
                },
                {
                    id: 4,
                    display_name: 'Zone4',
                    x_loc: 3.5,
                    y_loc: 3.5,
                    tx_level: 1259,
                    status: true,
                    ip_address: '192.168.0.113',
                    area: 'sales area'
                },
                {
                    id: 5,
                    display_name: 'Zone5',
                    x_loc: 0,
                    y_loc: 0,
                    tx_level: 0,
                    status: false,
                    ip_address: '0.0.0.0',
                    area: ''
                },
                {
                    id: 6,
                    display_name: 'Zone6',
                    x_loc: 1.0,
                    y_loc: 1.0,
                    tx_level: 1000,
                    status: true,
                    ip_address: '192.168.0.114',
                    area: 'display area'
                },
                {
                    id: 7,
                    display_name: 'zone7',
                    x_loc: 0.0,
                    y_loc: 0.0,
                    tx_level: 0,
                    status: false,
                    ip_address: '0.0.0.0',
                    area: ''
                },
                {
                    id: 8,
                    display_name: 'zone8',
                    x_loc: 0.0,
                    y_loc: 0.0,
                    tx_level: 0,
                    status: false,
                    ip_address: '0.0.0.0',
                    area: ''
                }
            ],
            proxy: {
                type: 'ajax',
                reader: {
                    type: 'array'
                }
            }
        }, cfg)]);
    }
});