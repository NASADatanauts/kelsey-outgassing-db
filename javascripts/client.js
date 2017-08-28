$.ajax({
  url: "https://data.nasa.gov/resource/gymh-eyc2.json",
  data: {},
  success: function(data) {
    // $("pre").text(JSON.stringify(data, null, "\t"));
    makeTable(data)
  },
  error: function(msg) {
    //todo: handle error gracefully
  }
});

//defins table column names
var table_columns = ["category",
                     "cvcm",
                     "id",
                     "material_usage",
                     "mfr",
                     "sample_material",
                     "space_code",
                     "tml",
                     "wvr"]

// // create header string based on table column names
//    var header_string = "<tr>";
//    for (i=0;i<table_columns.length;i++) {
//      header_string = header_string + "<th>"+ table_columns[i] +"</th>";
//     //  console.log(header_string);
//    }
//    header_string = header_string + "</tr>";
//   //  console.log(header_string);

function makeTable(data) {
    var og_table =  d3.select('.table_div table tbody').selectAll('tr')
      .data(data)
      .enter()
      .append("tr")
      .html(function(d) {
        // make the html table here
        // start with an almost empty html string for each row
        var row_string = "<tr>";
        //for each col name in the colname variable, append a <td></td> containing the data
        for (i=0;i<table_columns.length;i++) {
          row_string = row_string + "<td>"+ d[table_columns[i]] +"</td>";
        }
        // finish the row string
        row_string = row_string + "</tr>";
        return row_string;
      })//html function

}//makeTable function
