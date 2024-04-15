sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("project1.controller.View1", {
            onInit: function () {

            },

            onClick: function(event) {
                $.ajax({
                    url: "/sfapi/User?$format=json&$select=userId,username,empInfo/startDate,empInfo/jobInfoNav/company&$expand=empInfo/jobInfoNav&$filter=username eq '103120'",
                    contentType: "application/json; charset=utf-8",
                    type: 'GET',
                    success: (data) => {
                        console.log(data)
                    }       
                })
            }
        });
    });
