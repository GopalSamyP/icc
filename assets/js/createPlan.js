var app = angular.module('app', [])
app.controller('planController', ['$scope', "$locale", '$http', function($scope, $locale, $http) {

    $scope.selfDetermination = {"317" : "Sole Employer", "316" : "Co-Employer", "315" : "Bill Payer"};
    $scope.serviceCode = {"310": {"value": "310", "description": "310 - Respite", "unit": "15min"}, "311": {"value": "311", "description": "311 - Respite Facility Out of Home"}, "312": {"value": "312", "description": "312 - Live-In Caregiver", "unit": "15min"}, "313": {"value": "313", "description": "313 - Homemaker", "unit": "15min"}, "314": {"value": "314", "description": "314 - House Access Supports", "unit": "15min"}, "315": {"value": "315", "description": "315 - FMS Bill Payor", "unit": "Each"}, "316": {"value": "316", "description": "316 - FMS Co-Employer", "unit": "Fee"}, "317": {"value": "317", "description": "317 - FMS Sole Employer", "unit": "Each"}, "320": {"value": "320", "description": "320 - Community Living Supports", "unit": "15min"}, "321": {"value": "321", "description": "321 - Residential Facility", "unit": "15min"}, "331": {"value": "331", "description": "331 - Community Integration", "unit": "15min"}, "333": {"value": "333", "description": "333 - Participant Directed Goods and Services", "unit": "Each"}, "334": {"value": "334", "description": "334 - Individual Training and Education", "unit": "15min"}, "335": {"value": "335", "description": "335 - Employment Supports", "unit": "15min"}, "336": {"value": "336", "description": "336 - Technology Supports", "unit": "15min"}, "338": {"value": "338", "description": "338 - Non-Medical Transportation", "unit": "Each"}, "339": {"value": "339", "description": "339 - Prevocational Supports", "unit": "15min"}, "340": {"value": "340", "description": "340 - Independent Facilitator", "unit": "15min"}, "356": {"value": "356", "description": "356 - Environmental Accessibility", "unit": "15min"}, "357": {"value": "357", "description": "357 - Accupuncture Services", "unit": "15min"}, "358": {"value": "358", "description": "358 - Personal Emergency Response Systems", "unit": "15min"}, "359": {"value": "359", "description": "359 - Home Health Aide", "unit": "15min"}, "360": {"value": "360", "description": "360 - Communication Support", "unit": "15min"}, "361": {"value": "361", "description": "361 - Skilled Nursing", "unit": "15min"}, "362": {"value": "362", "description": "362 - Nutritional Consultation", "unit": "15min"}, "363": {"value": "363", "description": "363 - Crisis Intervention and Supports", "unit": "15min"}, "364": {"value": "364", "description": "364  - Behavior Intervention", "unit": "15min"}, "365": {"value": "365", "description": "365 - Specialized Med Equip and Sup", "unit": "15min"}, "366": {"value": "366", "description": "366 - Family Consumer Training", "unit": "15min"}, "367": {"value": "367", "description": "367 - Dental Services", "unit": "15min"}, "368": {"value": "368", "description": "368 - Lenses and Frames", "unit": "15min"}, "369": {"value": "369", "description": "369 - Optometric-Optician Services", "unit": "15min"}, "370": {"value": "370", "description": "370  - Psychology Services", "unit": "15min"}, "371": {"value": "371", "description": "371 - Training and Couseling Services", "unit": "15min"}, "372": {"value": "372", "description": "372  - Speech Hearing and Language", "unit": "15min"}, "373": {"value": "373", "description": "373 - Chiropractic Services", "unit": "15min"}, "374": {"value": "374", "description": "374 - Massage Therapy", "unit": "15min"}, "375": {"value": "375", "description": "375 - Occupational Therapy", "unit": "15min"}, "376": {"value": "376", "description": "376  - Physical Therapy", "unit": "15min"}, "377": {"value": "377", "description": "377 - Vehicle Modifications and Adaptations", "unit": "15min"}, "378": {"value": "378", "description": "378 - Family Support Services", "unit": "15min"} };
    $scope.regionalCenter = {"397": {"agencyid": "397", "value": "397", "description": "Alta RC SDP"}, "398": {"agencyid": "398", "value": "398", "description": "Central Valley RC SDP"}, "399": {"agencyid": "399", "value": "399", "description": "Eastern Los Angeles RC SDP"}, "400": {"agencyid": "400", "value": "400", "description": "Far Northern RC SDP"}, "401": {"agencyid": "401", "value": "401", "description": "Golden Gate RC SDP"}, "402": {"agencyid": "402", "value": "402", "description": "Harbor RC SDP"}, "403": {"agencyid": "403", "value": "403", "description": "Inland RC SDP"}, "404": {"agencyid": "404", "value": "404", "description": "Kern RC SDP"}, "405": {"agencyid": "405", "value": "405", "description": "Lanterman RC SDP"}, "406": {"agencyid": "406", "value": "406", "description": "North Bay RC SDP"}, "407": {"agencyid": "407", "value": "407", "description": "North Los Angeles RC SDP"}, "408": {"agencyid": "408", "value": "408", "description": "Redwood Coast RC SDP"}, "409": {"agencyid": "409", "value": "409", "description": "Orange County RC SDP"}, "410": {"agencyid": "410", "value": "410", "description": "East Bay RC SDP"}, "411": {"agencyid": "411", "value": "411", "description": "San Andreas RC SDP"}, "412": {"agencyid": "412", "value": "412", "description": "San Diego RC SDP"}, "413": {"agencyid": "413", "value": "413", "description": "San Gabriel - Pomona RC SDP"}, "414": {"agencyid": "414", "value": "414", "description": "South Central Los Angeles RC SDP"}, "415": {"agencyid": "415", "value": "415", "description": "Tri-Counties RC SDP"}, "416": {"agencyid": "416", "value": "416", "description": "Valley Mountain RC SDP"}, "417": {"agencyid": "417", "value": "417", "description": "Westside RC SDP"} };
    $scope.data = {"name": "", "details": {"name": "", "uci": "", "fmsvendor": "", "SpendingPlan": {"planStart": "", "planEnd": "", "SelfDetermination": "317", "fMSVendorNumber": "317", "regionalCenter": "", "workersCompensation": false, "zip": "", "totalCertifiedBudgetAmount": ""}, "PlanCategories": {"seriveList":[], "totalForLivingArrangement": "", "totalForEmploymentAndCommunityParticipation": "", "totalForHealthAndSafety": "", "totalPlanCategories": ""}, "ProviderExpense": {"expensesList": [{"Vendor Provider": "", "expenseType": "", "total": {"Units": "", "Auth Unit": "", "Pretax Total": ""}, "Cost Category": {"Units": "", "Auth Unit": "", "Pay Rate": "", "Pretax Total": "", "Taxes": "", "Sick Time": "", "Work Comp": "", "Total": "", "Taxed": ""} }] }, "allocatedBudgetExpenses": {"workersCompensation": "", "fullTimeWorkers": "", "partTimeWorkers": "", "insuranceAndBenefits": "", "sickRate": "", "tax": "", "totalTaxAndCosts": ""} } };

    $("#selfDetermination").change(function(event) {

        $scope.data.details.SpendingPlan.SelfDetermination = $(this).val();
        if ($scope.data.details.SpendingPlan.SelfDetermination == "317" || $scope.data.details.SpendingPlan.SelfDetermination == "") {
            $("#workersCompensation").removeAttr("disabled");
            $("#zipcontainer").show();
        } else {
            $("#zipcontainer").hide();
            $("#workersCompensation").attr("disabled", true);
        }

        $scope.data.details.SpendingPlan.workersCompensation = false;
        $('#workersCompensation').prop('checked', false);

        if ($scope.data.details.SpendingPlan.SelfDetermination != "") {

            $scope.data.details.SpendingPlan.fMSVendorNumber = $scope.data.details.SpendingPlan.SelfDetermination;
            $("#fMSVendorNumber").val($scope.data.details.SpendingPlan.SelfDetermination);
        }
        updateServiceTable(true);
    });

    $("#regionalCenter").change(function() {
    	$scope.data.details.SpendingPlan.regionalCenter = this.value;

        $("#vendorprovider").val("ICC");
        $("#numberOfunits").val("1");
        $("#authUnits").val("3");
        $("#preTaxTotal").val("150.00");
        
        $("#providerExpenseSelect option[value=val2]").attr('selected','selected');
        $("#costByUnit").val("3.00");
        $("#costTypePerUnit option[value=Hr]").attr('selected','selected');
        $("#costTimePerUnit option[value=PerMonth]").attr('selected','selected');
        $("#costByPayRate").val("50.00");
        $("#costByAuthUnit").val("3");
        $("#costPretaxTotal").val("150.00");
        $("#totalProviderAmount").val("150.00");

        var summary = $("#vendorprovider").val()+" providing"+ $scope.data.details.SpendingPlan.SelfDetermination+" - "+$scope.selfDetermination[$scope.data.details.SpendingPlan.SelfDetermination] +"at $50.00 per hr for each month for months for 3 total hrs at a grand total of $150.00.";
        $("#expensesSummary").html(summary);
    	updateServiceTable(false);
    });

    $("#spendingPlanCategories").click(function(e) {

        var message = "";
        if($scope.data.details.name.length == 0){
            message = "Please enter participant name";
        }

        if(message.length == 0 && $scope.data.details.uci.length == 0){
            message = "Please enter participant UCI";
        }

        if(message.length == 0 && $scope.data.details.fmsvendor.length == 0){
            message = "Please enter FMS Vendor";
        }

        if(message.length == 0 && $scope.data.details.SpendingPlan.regionalCenter.length == 0){
            message = "Please choose Regional Center";
        }

        if(message.length == 0 && $scope.data.details.SpendingPlan.totalCertifiedBudgetAmount.length == 0){
            message = "Please enter Total Certified Budget Amount";
        }

        if(message.length > 0){
            e.stopPropagation(); 
            alert(message);
        }else{
            $scope.data.details.SpendingPlan.planStart = $("#planStart").val();
            $scope.data.details.SpendingPlan.planEnd = $("#planEnd").val();
        }

        
    });

    $('#workersCompensation').click(function() {
        if ($('#workersCompensation').is(":checked")) {
            $scope.data.details.SpendingPlan.workersCompensation = true;
            $("#providerExpenseContainer").hide();
            $("#allocatedBudgetExpensesContainer").hide();
            $("#serviceCode").attr("disabled","disabled");
            $("#addService").attr("disabled","disabled");
        } else {
            $scope.data.details.SpendingPlan.workersCompensation = false;
            $("#providerExpenseContainer").show();
            $("#allocatedBudgetExpensesContainer").hide();
            $("#serviceCode").removeAttr("disabled");
            $("#addService").removeAttr("disabled");
        }
    });

    $("#addService").click(function() {
    	var serviceCode = this.value;
        updateServiceTable(false, "0.00", $("#selectServiceCode option:selected").text());
    });

    function updateServiceTable(isSelfDetermination, amount, serviceDetails) {
        if ($scope.data.details.SpendingPlan.regionalCenter != "") {
            // $('#serviceTable').find('tbody').html('');
            var defaultAmount = "0.00";
            if(amount == undefined){
            	if ($scope.data.details.SpendingPlan.fMSVendorNumber == "316") {
            	    defaultAmount = "1375.00";
            	} else if ($scope.data.details.SpendingPlan.fMSVendorNumber == "316") {
            	    defaultAmount = "550.00";
            	} else if ($scope.data.details.SpendingPlan.fMSVendorNumber == "317") {
            	    defaultAmount = "1210.00";
            	}
            }
            
            var selectedValue = $scope.data.details.SpendingPlan.fMSVendorNumber + ' - ' + $("#regionalCenter option:selected").text();
            if(serviceDetails != undefined){
            	selectedValue = serviceDetails;
            }
            var tableRow = "<tr>";
            tableRow = tableRow + '<td>' + selectedValue + '</td>';
            tableRow = tableRow + '<td>' + selectedValue + '</td>';
            tableRow = tableRow + '<td><div class="form-group input-group"> <div class="input-group-prepend"> <span class="input-group-text">$</span> </div> <input type="text" class="form-control" disabled value="' + defaultAmount + '"> </div></td>';
            tableRow = tableRow + '<td></td>';
            tableRow = tableRow + '</tr>';
            $('#serviceTable').find('tbody').append(tableRow);

   //          var serviceObj = {
			//   "serviceCode": selectedValue,
			//   "description": selectedValue,
			//   "budgetAllocated": defaultAmount,
			//   "selfDetermination": isSelfDetermination
			// }
   //          $scope.data.details.PlanCategories.seriveList.push(serviceObj);

            // $scope.data.details.PlanCategories.serviceCode = selectedValue;
            // $scope.data.details.PlanCategories.description = selectedValue;
            // $scope.data.details.PlanCategories.budgetAllocated = defaultAmount;
            if(amount == undefined){
            	$("#totalForLivingArrangement").val(defaultAmount);
            	$("#totalPlanCategories").val(defaultAmount);
            	$("#totalForEmploymentAndCommunityParticipation").val("0.00");
            	$("#totalForHealthAndSafety").val("0.00");
	        }
        } else {
            $('#serviceTable').find('tbody').html('');
        }
    }

    

    $scope.savePlan = function(){

        var finalData = {
            "planName" : $scope.data.name,
            "participantName" : $scope.data.details.name,
            "participantUCI" : $scope.data.details.uci,
            "participantFmsVendor" : $scope.data.details.fmsvendor,
            "details" : JSON.stringify($scope.data)
        }
        console.log(finalData);
    	$http({
    	  method: 'POST',
    	  url: location.origin + '/admin/api/icc',
    	  data: finalData
    	}).then(function successCallback(response) {
    	   alert(finalData.planName+" Created Successfully");
           window.location = location.origin+"/icc/dashboard.html";
    	}, function errorCallback(response) {
    	    // called asynchronously if an error occurs
    	    // or server returns response with an error status.
    	});
    }

    
    var pdfDocument = new jsPDF('p', 'pt', 'a4', true);
    var specialElementHandlers = {
        '#printBtnDiv': function (element, renderer) {
            return true;
        }
    };
    $("#print-spending-plan").click(function(){

        $("#pdfContainer").show();
        $("#printPlanName").val($scope.data.details.name);
        $("#printUCI").val($scope.data.details.uci);
        $("#printFmsVendor").val($scope.data.details.fmsvendor);

        $("#printStartDate").val($scope.data.details.SpendingPlan.planStart);
        $("#printEndDate").val($scope.data.details.SpendingPlan.planEnd);
        $("#printFmsServiceCode").val($scope.data.details.SpendingPlan.fMSVendorNumber);
        $("#printRegionalCenter").val($scope.data.details.SpendingPlan.regionalCenter);
        $("#printSelfDetermination").val($scope.selfDetermination[$scope.data.details.SpendingPlan.SelfDetermination]);
        $("#printTotalCertifiedBudgetAmount").val($scope.data.details.SpendingPlan.totalCertifiedBudgetAmount);

        $("#printBudgetCategory").html("Living Arrangement");
        $("#printService").html($("#selectServiceCode option:selected").attr("value"));
        $("#printServiceCode").html($("#selectServiceCode option:selected").text());
        $("#printFrequency").html($("#fspFrequency").text());
        $("#printAmount").val($("#fspAmount").val());

        // $("#printTotalforLivingArrangementCategory").val();
        // $("#printCertifiedBudgetAmount").val();
        // $("#printSpendingPlanAmount").val();
        // $("#printCertifiedBudgetDollarsRemaining").val();

        var pdfDocument = new jsPDF('p', 'pt', 'a3', true);
        html2canvas($("#pdfContainer"), {
            onrendered: function(canvas) {
                var imgData = canvas.toDataURL("image/png", 1.0);
                pdfDocument.addImage(imgData, 'JPG', 50, 50, 650, 0);

                setTimeout(function() {

                    //Save PDF Doc  
                    pdfDocument.save($scope.data.name+'-Plan.pdf');
                    $("#pdfContainer").hide();

                    //Generate BLOB object
                    // var blob = pdfDocument.output("blob");

                    //Getting URL of blob object
                    // var blobURL = URL.createObjectURL(blob);

                    //Showing PDF generated in iFrame element
                    // var iframe = document.getElementById('iFrame-pdf-container');
                    // iframe.src = blobURL;

                    //Setting download link
                    // var downloadLink = document.getElementById('downloadSpPDF');
                    // downloadLink.href = blobURL;

                    // $("#sample-pdf").slideDown();

                }, 0);
            }
        });
    });

    $("#spendingPlanButton").click(function(e){
        
        if($scope.data.details.name.length > 0){
            $("#fspName").val($scope.data.details.name);
            $("#fspUCI").val($scope.data.details.uci);
            $("#fspFmsVendor").val($scope.data.details.fmsvendor);
            $("#fspplanStart").val($scope.data.details.SpendingPlan.planStart);
            $("#fspplanEnd").val($scope.data.details.SpendingPlan.planEnd);
            $("#fspfMSVendorNumber").val($scope.data.details.SpendingPlan.fMSVendorNumber);
            $("#fspregionalCenter").val($scope.data.details.SpendingPlan.regionalCenter);
            $("#fspSelfDetermination").val($scope.selfDetermination[$scope.data.details.SpendingPlan.SelfDetermination]);
            $("#fsptotalCertifiedBudgetAmount").val($scope.data.details.SpendingPlan.totalCertifiedBudgetAmount);

            $("#fspBudgetCategory").html("Living Arrangement");
            $("#fspService").html($("#selectServiceCode option:selected").text());
            $("#fspServiceCode").html($("#selectServiceCode option:selected").attr("value"));
            $("#fspFrequency").html("ICC providing 315 - FMS Bill Payor at $50.00 per hr for each month for months for 3 total hrs at a grand total of $150.00.");
            $("#fspAmount").html("150.00");

            $("#fspCertifiedBudgetAmount").val("150.00");
            $("#fspParticipantsSpendingPlanAmount").val("0.00");
            $("#fspCertifiedBudgetDollarsRemaining").val("0.00");
        }else{
            alert("Please enter plan name and participant details");
            e.stopPropagation(); 
        }
    });

    $("#allocatedBudgetExpenses").click(function(e){
        if(!jQuery.isEmptyObject($scope.data.details)
            && $scope.data.name.length > 0){
            $scope.data.details.allocatedBudgetExpenses.sickRate = "3.3";
            $scope.data.details.allocatedBudgetExpenses.tax = "12.75";
            $scope.data.details.allocatedBudgetExpenses.totalTaxAndCosts = "16.08";
           
            $("#totalTaxAndCosts").val($scope.data.details.allocatedBudgetExpenses.totalTaxAndCosts);
            $("#expensesTax").val($scope.data.details.allocatedBudgetExpenses.tax);
            $("#expensesSickRate").val($scope.data.details.allocatedBudgetExpenses.sickRate);
        }else{
             alert("Please enter plan name and participant details");
             e.stopPropagation(); 
        }
    });

    function initController() {
        $('input[name="planStart"]').daterangepicker({
            singleDatePicker: true,
            showDropdowns: true,
            minYear: 1950,
            maxYear: 2100,
            startDate: new Date()
        }, function(start, end, label) {

        });

        $('input[name="planEnd"]').daterangepicker({
            singleDatePicker: true,
            showDropdowns: true,
            minYear: 1950,
            maxYear: 2100,
            startDate: moment().add(1, 'y')
        }, function(start, end, label) {

        });
    }
    initController();


}]);