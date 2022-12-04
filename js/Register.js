$("#registerjson").click(function () { 
    JSON.parse('[' + $("#Name").text(), $("#Email").text(),$("#Password").text() + ']');
});
