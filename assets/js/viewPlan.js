$(document).ready(function () {
    $.ajax({
        'url': location.origin + "/admin/api/icc",
        'method': "GET",
        'contentType': 'application/json'
    }).done( function(data) {
        console.log(data);
        var planList = [];
        for(var i=0; i < data.plans.length;i++){
            planList.push({
                "Name": data.plans[i]['planName'],
                "Participant Name": data.plans[i]['participantName'],
                "UCI": data.plans[i]['participantUCI'],
                "FMS Vendor": data.plans[i]['participantFmsVendor']
            });
        }
        $('#planTabel').dataTable( {
            "aaData": planList,
            "columns": [
                { "data": "Name" },
                { "data": "Participant Name" },
                { "data": "UCI" },
                { "data": "FMS Vendor" }
            ]
        })
    });
});