function cChart_v1() {
    var glabels = [];
    var gdata =  [];
    if(localStorage.getItem("aAppids") !== null){
        glabels.push("Total Copies");
        glabels.push("Total Appids");
        glabels.push("Pending");
        glabels.push("Excluded");
        glabels.push("Accepted");

        gdata.push(localStorage.getItem("peCopies"));
        gdata.push(localStorage.getItem("UniqueAppids"));
        gdata.push(localStorage.getItem("pAppids"));
        gdata.push(localStorage.getItem("eAppids"));
        gdata.push(localStorage.getItem("aAppids"));
    }else{
        glabels.push("Total Copies");
        glabels.push("Total Appids");
        glabels.push("Pending");
        glabels.push("Excluded");

        gdata.push(localStorage.getItem("peCopies"));
        gdata.push(localStorage.getItem("UniqueAppids"));
        gdata.push(localStorage.getItem("pAppids"));
        gdata.push(localStorage.getItem("eAppids"));

    }
    var data = {
        labels: glabels,
        datasets: [
            {
                label: "Curator Chart",
                fillColor: "rgba(220,220,220,0.2)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: gdata
            }
        ]
    };

    if ($J(".titleframe.PCGameit_Chart")[0]){
        $J('.titleframe.PCGameit_Chart').html('<canvas id="cChart_v1" height="300px" width="650px"></canvas>');
        new Chart(document.getElementById('cChart_v1').getContext('2d')).Bar(data);
    }else{
        $J( ".titleframe.PCGameitDataContainer" ).append( "<div class=\"titleframe PCGameit_Chart\"></div><br>" );
        $J('.titleframe.PCGameit_Chart').html('<canvas id="cChart_v1" height="300px" width="650px"></canvas>');
        new Chart(document.getElementById('cChart_v1').getContext('2d')).Bar(data);
    }
}