/*
 * File: app/model/InventoryModelMapping.js
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

Ext.define('RFID_Tag_Locator_Service.model.InventoryModelMapping', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.field.String',
        'Ext.data.field.Integer'
    ],


    fields: [
        {
            type: 'string',
            name: 'EPC'
        },
        {
            type: 'int',
            name: 'AntennaId'
        },
        {
            type: 'string',
            name: 'AntennaName'
        },
        {
            type: 'int',
            name: 'Rssi'
        },
        {
            type: 'int',
            name: 'ScaledRssi'
        }
    ]

});