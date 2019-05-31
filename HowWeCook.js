//NAVBAR FUNCTIONS START
$(".navListItem").mouseover(function () {
    switch (this.innerHTML) {
        case "<strong>General</strong>":
        $(".generalList").css("display", "flex");
        break
        
        case "<strong>Savory</strong>":
        $(".savoryList").css("display", "flex");
        break
        
        case "<strong>Pastry</strong>":
        $(".pastryList").css("display", "flex");
        break
    }
});

$(".generalListItem, .savoryListItem, .pastryListItem").mouseover(function () {
    $(this).css("background-color", "blue");
    $(this).css("color", "white");
});

$(".generalListItem, .savoryListItem, .pastryListItem").mouseleave(function () {
    $(this).css("background-color", "skyblue");
});

$(".flexListContainer").mouseleave(function () {
    $(".generalList, .savoryList, .pastryList").css("display", "none");
});
//NAVBAR FUNCTIONS END

