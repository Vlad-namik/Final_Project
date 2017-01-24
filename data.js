/**
 * Created by namik on 10.01.17.
 */
$(function () {

   var toplots = [
       {name: "iPhone7 64Gb NeverLock", prize: 16000, region: "киев", state: "new", shipment: 10, image: ["images/iphone7.jpg"]},
       {name: "Samsung S7 64Gb NeverLock", prize: 17000, region: "кировоград", state: "new", shipment: 5, image: ["images/s7.png"]},
       {name: "Meizu MX6 32Gb", prize: 8000, region: "сумы", state: "new", shipment: 15, image: ["images/mx6.png"]}
   ];

    for (var i = 0; i < toplots.length; i++){
        var a = document.createElement("div");
        a.className = "lots-div lot";
        var img = document.createElement("img");
        img.src = toplots[i].image;
        img.className = "lots-img";
        var name = document.createElement("h2");
        name.innerHTML = toplots[i].name;
        var prize = document.createElement("h4");
        prize.innerHTML = toplots[i].prize + " " + "UAH";
        prize.style.color = "red";
        a.appendChild(img);
        a.appendChild(name);
        a.appendChild(prize);
        $(".content-main").append(a); //
        $(".lots-div").data("category", 0);
    }

    //0 - телефон, 1- планшет, 2-наушники,10-аккс.телефон, 11-аккс.планшет.
    telephone = [
        {name: "iPhone7 64Gb NeverLock", prize: 16000, region: "киев", state: "new", shipment: 10, image: ["images/iphone7.jpg" , "images/i7p.png", "images/i7b.jpg"], cat:0},
        {name: "Samsung S7 64Gb NeverLock", prize: 17000, region: "кировоград", state: "new", shipment: 5, image: ["images/s7.png" , "images/s7.1.jpg", "images/s7.2.jpg"], cat:0},
        {name: "Meizu MX6 32Gb", prize: 8000, region: "сумы", state: "new", shipment: 15, image: ["images/mx6.png" , "images/mx6.1.jpg", "images/mx6.2.jpg"], cat:0}
    ];
    telephoneForSort = [
        {name: "iPhone7 64Gb NeverLock", prize: 16000, region: "киев", state: "new", shipment: 10, image: ["images/iphone7.jpg" , "images/i7p.png", "images/i7b.jpg"], cat:0},
        {name: "Samsung S7 64Gb NeverLock", prize: 17000, region: "кировоград", state: "new", shipment: 5, image: ["images/s7.png" , "images/s7.1.jpg", "images/s7.2.jpg"], cat:0},
        {name: "Meizu MX6 32Gb", prize: 8000, region: "сумы", state: "new", shipment: 15, image: ["images/mx6.png" , "images/mx6.1.jpg", "images/mx6.2.jpg"], cat:0}
    ];
    telephoneForSort1 = [
        {name: "iPhone7 64Gb NeverLock", prize: 17000, region: "киев", state: "new", shipment: 10, image: ["images/iphone7.jpg" , "images/i7p.png", "images/i7b.jpg"], cat:0},
        {name: "Samsung S7 64Gb NeverLock", prize: 15000, region: "кировоград", state: "new", shipment: 5, image: ["images/s7.png" , "images/s7.1.jpg", "images/s7.2.jpg"], cat:0},
        {name: "Meizu MX6 32Gb", prize: 8000, region: "сумы", state: "new", shipment: 15, image: ["images/mx6.png" , "images/mx6.1.jpg", "images/mx6.2.jpg"], cat:0}
    ];


    alltablets = [{name: "iPad Pro 9.7-inch 64Gb", prize: 27000, region: "запорожье", state: "new", shipment: 50, image: ["images/ipad.jpg" , "images/ipad.1.jpg", "images/ipad.2.jpg"] , cat:3},
        {name: "Google Pixel C", prize: 25000, region: "полтава", state: "owned", shipment: 40, image: ["images/pix.jpg" , "images/pix.2.jpg", "images/pix.3.jpg"], cat:3},
        {name: "Samsung Galaxy Tab S2", prize: 19000, region: "киев", state: "new", shipment: 20, image: ["images/tab2.jpg" , "images/tab2.1.jpg", "images/tab2.2.jpg"], cat:3},
        {name: "Sony Xperia Z4 Tablet", prize: 17000, region: "харьков", state: "new", shipment: 25, image: ["images/xperia.1.jpg" , "images/xperia.jpg", "images/xperia.2.jpg"], cat:3},
        {name: "Microsoft Surface Pro 4", prize: 20000, region: "одесса", state: "new", shipment: 35, image: ["images/surface.jpg" , "images/surface.1.jpg", "images/surf2.jpg"], cat:3},
        {name: "iPad mini 4", prize: 12000, region: "днепр", state: "owned", shipment: 25, image: ["images/mini.1.jpg" , "images/mini.jpg", "images/mini.2.jpg"], cat:3},
        {name: "Huawei Matebook", prize: 10000, region: "винница", state: "owned", shipment: 10, image: ["images/wei.jpg" , "images/wei.1.jpg", "images/wei.2.jpg"], cat:3} ,
        {name: "Чехол Noble", prize: 500, region: "киев", state: "new", shipment: 0, image: ["images/noble.jpg" , "images/noble.1.jpg", "images/noble.2.jpg"] ,cat:3},
        {name: "Чехол Baseus", prize: 600, region: "киев", state: "new", shipment: 5, image: ["images/baseus.jpg" , "images/baseus.1.jpg", "images/baseus.2.jpg"] ,cat:3},
        {name: "iPad case", prize: 300, region: "киев", state: "new", shipment: 0, image: ["images/case.jpg" , "images/case.1.jpg", "images/case.2.jpg"] ,cat:3},
        {name: "Silicon iPad case", prize: 200, region: "киев", state: "new", shipment: 0, image: ["images/silicon.jpg" , "images/silicon.1.jpg", "images/silicon.2.jpg"] ,cat:3}
        ];
    alltabletsForSort = [{name: "iPad Pro 9.7-inch 64Gb", prize: 27000, region: "запорожье", state: "new", shipment: 50, image: ["images/ipad.jpg" , "images/ipad.1.jpg", "images/ipad.2.jpg"] , cat:3},
        {name: "Google Pixel C", prize: 25000, region: "полтава", state: "owned", shipment: 40, image: ["images/pix.jpg" , "images/pix.2.jpg", "images/pix.3.jpg"], cat:3},
        {name: "Samsung Galaxy Tab S2", prize: 19000, region: "киев", state: "new", shipment: 20, image: ["images/tab2.jpg" , "images/tab2.1.jpg", "images/tab2.2.jpg"], cat:3},
        {name: "Sony Xperia Z4 Tablet", prize: 17000, region: "харьков", state: "new", shipment: 25, image: ["images/xperia.1.jpg" , "images/xperia.jpg", "images/xperia.2.jpg"], cat:3},
        {name: "Microsoft Surface Pro 4", prize: 20000, region: "одесса", state: "new", shipment: 35, image: ["images/surface.jpg" , "images/surface.1.jpg", "images/surf2.jpg"], cat:3},
        {name: "iPad mini 4", prize: 12000, region: "днепр", state: "owned", shipment: 25, image: ["images/mini.1.jpg" , "images/mini.jpg", "images/mini.2.jpg"], cat:3},
        {name: "Huawei Matebook", prize: 10000, region: "винница", state: "owned", shipment: 10, image: ["images/wei.jpg" , "images/wei.1.jpg", "images/wei.2.jpg"], cat:3} ,
        {name: "Чехол Noble", prize: 500, region: "киев", state: "new", shipment: 0, image: ["images/noble.jpg" , "images/noble.1.jpg", "images/noble.2.jpg"] ,cat:3},
        {name: "Чехол Baseus", prize: 600, region: "киев", state: "new", shipment: 5, image: ["images/baseus.jpg" , "images/baseus.1.jpg", "images/baseus.2.jpg"] ,cat:3},
        {name: "iPad case", prize: 300, region: "киев", state: "new", shipment: 0, image: ["images/case.jpg" , "images/case.1.jpg", "images/case.2.jpg"] ,cat:3},
        {name: "Silicon iPad case", prize: 200, region: "киев", state: "new", shipment: 0, image: ["images/silicon.jpg" , "images/silicon.1.jpg", "images/silicon.2.jpg"] ,cat:3}
    ];
    alltabletsForSort1 = [{name: "iPad Pro 9.7-inch 64Gb", prize: 27000, region: "запорожье", state: "new", shipment: 50, image: ["images/ipad.jpg" , "images/ipad.1.jpg", "images/ipad.2.jpg"] , cat:3},
        {name: "Google Pixel C", prize: 25000, region: "полтава", state: "owned", shipment: 40, image: ["images/pix.jpg" , "images/pix.2.jpg", "images/pix.3.jpg"], cat:3},
        {name: "Samsung Galaxy Tab S2", prize: 19000, region: "киев", state: "new", shipment: 20, image: ["images/tab2.jpg" , "images/tab2.1.jpg", "images/tab2.2.jpg"], cat:3},
        {name: "Sony Xperia Z4 Tablet", prize: 17000, region: "харьков", state: "new", shipment: 25, image: ["images/xperia.1.jpg" , "images/xperia.jpg", "images/xperia.2.jpg"], cat:3},
        {name: "Microsoft Surface Pro 4", prize: 20000, region: "одесса", state: "new", shipment: 35, image: ["images/surface.jpg" , "images/surface.1.jpg", "images/surf2.jpg"], cat:3},
        {name: "iPad mini 4", prize: 12000, region: "днепр", state: "owned", shipment: 25, image: ["images/mini.1.jpg" , "images/mini.jpg", "images/mini.2.jpg"], cat:3},
        {name: "Huawei Matebook", prize: 10000, region: "винница", state: "owned", shipment: 10, image: ["images/wei.jpg" , "images/wei.1.jpg", "images/wei.2.jpg"], cat:3} ,
        {name: "Чехол Noble", prize: 500, region: "киев", state: "new", shipment: 0, image: ["images/noble.jpg" , "images/noble.1.jpg", "images/noble.2.jpg"] ,cat:3},
        {name: "Чехол Baseus", prize: 600, region: "киев", state: "new", shipment: 5, image: ["images/baseus.jpg" , "images/baseus.1.jpg", "images/baseus.2.jpg"] ,cat:3},
        {name: "iPad case", prize: 300, region: "киев", state: "new", shipment: 0, image: ["images/case.jpg" , "images/case.1.jpg", "images/case.2.jpg"] ,cat:3},
        {name: "Silicon iPad case", prize: 200, region: "киев", state: "new", shipment: 0, image: ["images/silicon.jpg" , "images/silicon.1.jpg", "images/silicon.2.jpg"] ,cat:3}
    ];

    tablets = [
        {name: "iPad Pro 9.7-inch 64Gb", prize: 27000, region: "запорожье", state: "new", shipment: 50, image: ["images/ipad.jpg" , "images/ipad.1.jpg", "images/ipad.2.jpg"] , cat:1},
        {name: "Google Pixel C", prize: 25000, region: "полтава", state: "owned", shipment: 40, image: ["images/pix.jpg" , "images/pix.2.jpg", "images/pix.3.jpg"], cat:1},
        {name: "Samsung Galaxy Tab S2", prize: 19000, region: "киев", state: "new", shipment: 20, image: ["images/tab2.jpg" , "images/tab2.1.jpg", "images/tab2.2.jpg"], cat:1},
        {name: "Sony Xperia Z4 Tablet", prize: 17000, region: "харьков", state: "new", shipment: 25, image: ["images/xperia.1.jpg" , "images/xperia.jpg", "images/xperia.2.jpg"], cat:1},
        {name: "Microsoft Surface Pro 4", prize: 20000, region: "одесса", state: "new", shipment: 35, image: ["images/surface.jpg" , "images/surface.1.jpg", "images/surf2.jpg"], cat:1},
        {name: "iPad mini 4", prize: 12000, region: "днепр", state: "owned", shipment: 25, image: ["images/mini.1.jpg" , "images/mini.jpg", "images/mini.2.jpg"], cat:1},
        {name: "Huawei Matebook", prize: 10000, region: "винница", state: "owned", shipment: 10, image: ["images/wei.jpg" , "images/wei.1.jpg", "images/wei.2.jpg"], cat:1}
    ];
    tabletsForSort = [
        {name: "iPad Pro 9.7-inch 64Gb", prize: 27000, region: "запорожье", state: "new", shipment: 50, image: ["images/ipad.jpg" , "images/ipad.1.jpg", "images/ipad.2.jpg"] , cat:1},
        {name: "Google Pixel C", prize: 25000, region: "полтава", state: "owned", shipment: 40, image: ["images/pix.jpg" , "images/pix.2.jpg", "images/pix.3.jpg"], cat:1},
        {name: "Samsung Galaxy Tab S2", prize: 19000, region: "киев", state: "new", shipment: 20, image: ["images/tab2.jpg" , "images/tab2.1.jpg", "images/tab2.2.jpg"], cat:1},
        {name: "Sony Xperia Z4 Tablet", prize: 17000, region: "харьков", state: "new", shipment: 25, image: ["images/xperia.1.jpg" , "images/xperia.jpg", "images/xperia.2.jpg"], cat:1},
        {name: "Microsoft Surface Pro 4", prize: 20000, region: "одесса", state: "new", shipment: 35, image: ["images/surface.jpg" , "images/surface.1.jpg", "images/surf2.jpg"], cat:1},
        {name: "iPad mini 4", prize: 12000, region: "днепр", state: "owned", shipment: 25, image: ["images/mini.1.jpg" , "images/mini.jpg", "images/mini.2.jpg"], cat:1},
        {name: "Huawei Matebook", prize: 10000, region: "винница", state: "owned", shipment: 10, image: ["images/wei.jpg" , "images/wei.1.jpg", "images/wei.2.jpg"], cat:1}
    ];
    tabletsForSort1 = [
        {name: "iPad Pro 9.7-inch 64Gb", prize: 27000, region: "запорожье", state: "new", shipment: 50, image: ["images/ipad.jpg" , "images/ipad.1.jpg", "images/ipad.2.jpg"] , cat:1},
        {name: "Google Pixel C", prize: 25000, region: "полтава", state: "owned", shipment: 40, image: ["images/pix.jpg" , "images/pix.2.jpg", "images/pix.3.jpg"], cat:1},
        {name: "Samsung Galaxy Tab S2", prize: 19000, region: "киев", state: "new", shipment: 20, image: ["images/tab2.jpg" , "images/tab2.1.jpg", "images/tab2.2.jpg"], cat:1},
        {name: "Sony Xperia Z4 Tablet", prize: 17000, region: "харьков", state: "new", shipment: 25, image: ["images/xperia.1.jpg" , "images/xperia.jpg", "images/xperia.2.jpg"], cat:1},
        {name: "Microsoft Surface Pro 4", prize: 20000, region: "одесса", state: "new", shipment: 35, image: ["images/surface.jpg" , "images/surface.1.jpg", "images/surf2.jpg"], cat:1},
        {name: "iPad mini 4", prize: 12000, region: "днепр", state: "owned", shipment: 25, image: ["images/mini.1.jpg" , "images/mini.jpg", "images/mini.2.jpg"], cat:1},
        {name: "Huawei Matebook", prize: 10000, region: "винница", state: "owned", shipment: 10, image: ["images/wei.jpg" , "images/wei.1.jpg", "images/wei.2.jpg"], cat:1}
    ];

    tabletAccessories =[
        {name: "Чехол Noble", prize: 500, region: "киев", state: "new", shipment: 0, image: ["images/noble.jpg" , "images/noble.1.jpg", "images/noble.2.jpg"] ,cat:11},
        {name: "Чехол Baseus", prize: 600, region: "киев", state: "new", shipment: 5, image: ["images/baseus.jpg" , "images/baseus.1.jpg", "images/baseus.2.jpg"] ,cat:11},
        {name: "iPad case", prize: 300, region: "киев", state: "new", shipment: 0, image: ["images/case.jpg" , "images/case.1.jpg", "images/case.2.jpg"] ,cat:11},
        {name: "Silicon iPad case", prize: 200, region: "киев", state: "new", shipment: 0, image: ["images/silicon.jpg" , "images/silicon.1.jpg", "images/silicon.2.jpg"] ,cat:11}
    ];
    tabletAccessoriesForSort =[
        {name: "Чехол Noble", prize: 500, region: "киев", state: "new", shipment: 0, image: ["images/noble.jpg" , "images/noble.1.jpg", "images/noble.2.jpg"] ,cat:11},
        {name: "Чехол Baseus", prize: 600, region: "киев", state: "new", shipment: 5, image: ["images/baseus.jpg" , "images/baseus.1.jpg", "images/baseus.2.jpg"] ,cat:11},
        {name: "iPad case", prize: 300, region: "киев", state: "new", shipment: 0, image: ["images/case.jpg" , "images/case.1.jpg", "images/case.2.jpg"] ,cat:11},
        {name: "Silicon iPad case", prize: 200, region: "киев", state: "new", shipment: 0, image: ["images/silicon.jpg" , "images/silicon.1.jpg", "images/silicon.2.jpg"] ,cat:11}
    ];

    headphones = [
        {name: "Audio-Technica MSR7", prize: 3000, region: "киев", state: "new", shipment: 10, image: ["images/tech.jpg" , "images/tech.1.jpg", "images/tech.2.jpg"] , cat:2}
    ];
    headphonesForSort = [
        {name: "Audio-Technica MSR7", prize: 3000, region: "киев", state: "new", shipment: 10, image: ["images/tech.jpg" , "images/tech.1.jpg", "images/tech.2.jpg"] , cat:2}
    ];
    headphonesForSort1 = [
        {name: "Audio-Technica MSR7", prize: 3000, region: "киев", state: "new", shipment: 10, image: ["images/tech.jpg" , "images/tech.1.jpg", "images/tech.2.jpg"] , cat:2}
    ];

    var pageSize = 4;
    var page = 0;
    var part = 0;
    var length = 0;

    result = alltabletsForSort.sort(SortByPrizeReverse);
    resultByPriceUp = alltabletsForSort1.sort(SortByPrize);

    //
    resultTabletsByPriceUp = tabletsForSort.sort(SortByPrize);
    resultTabletsByPriceDown = tabletsForSort1.sort(SortByPrizeReverse);
    //
    resultPhonesByPriceDown = telephoneForSort.sort(SortByPrizeReverse);
    resultPhonesByPriceUp = telephoneForSort1.sort(SortByPrize);
    //
    resultHeadphonesByPriceDown = headphonesForSort.sort(SortByPrizeReverse);
    resultHeadphonesByPriceUp = headphonesForSort1.sort(SortByPrize);

    SearchForItems();

    foundItemsbyPriceUp = foundItemsUp.sort(SortByPrizeReverse);
    foundItemsbyPriceDown = foundItemsDown.sort(SortByPrize);




    var url = window.location.href;

    if (url == "http://localhost:63342/direct-final-project/tel.html?_ijt=6i5e30fifp9ggk3nk1bechqr7m") {
        page = 0;
        sessionStorage.subcat = 99;


        DrawListOfLots(telephone , 0, page,pageSize , 0);

        $('.sort').on('change', function() {
            if(this.value == "prize-down") {
                sessionStorage.subcat = 6;

                window.location = "http://localhost:63342/direct-final-project/searched.html?_ijt=lafkpofulatdngofmma0huvpku";
            }
            else if(this.value == "prize-up") {
                sessionStorage.subcat = 7;

                window.location = "http://localhost:63342/direct-final-project/searched.html?_ijt=lafkpofulatdngofmma0huvpku";
            }

        });


    }

    else if(url == "http://localhost:63342/direct-final-project/tablet.html?_ijt=hpvi4d1iijpn44m8e0tm31kufn") {
        page = 0;
        sessionStorage.subcat = 99;

        DrawListOfLots(alltablets, 3, page, pageSize, 0);

        $('.sort').on('change', function() {
            if(this.value == "prize-down") {
                sessionStorage.subcat = 2;
                window.location = "http://localhost:63342/direct-final-project/searched.html?_ijt=lafkpofulatdngofmma0huvpku";
            }
            else if(this.value == "prize-up") {
                sessionStorage.subcat = 3;

                window.location = "http://localhost:63342/direct-final-project/searched.html?_ijt=lafkpofulatdngofmma0huvpku";
            }

        });
    }

    else if (url == "http://localhost:63342/direct-final-project/headphone.html?_ijt=6rgh55gdn7bo4ed6pvqntnv9sd"){
        page = 0;
        sessionStorage.subcat = 99;

        DrawListOfLots(headphones, 2, page , pageSize, 0);

        $('.sort').on('change', function() {
            if(this.value == "prize-down") {
                sessionStorage.subcat = 8;

                window.location = "http://localhost:63342/direct-final-project/searched.html?_ijt=lafkpofulatdngofmma0huvpku";
            }
            else if(this.value == "prize-up") {
                sessionStorage.subcat = 9;

                window.location = "http://localhost:63342/direct-final-project/searched.html?_ijt=lafkpofulatdngofmma0huvpku";
            }

        });

    }

    else if (url == "http://localhost:63342/direct-final-project/searched.html?_ijt=lafkpofulatdngofmma0huvpku" && sessionStorage.subcat == 0 ){
        DrawListOfLots(tablets, 1, page , pageSize, 0);
        $('.sort').on('change', function() {
            if(this.value == "prize-down") {
                sessionStorage.subcat = 4;

                window.location = "http://localhost:63342/direct-final-project/searched.html?_ijt=lafkpofulatdngofmma0huvpku";
            }
            else if(this.value == "prize-up") {
                sessionStorage.subcat = 5;

                window.location = "http://localhost:63342/direct-final-project/searched.html?_ijt=lafkpofulatdngofmma0huvpku";
            }

        });
        $(".btn-srch").click(function() {
            substring = $(".finder").val();
            sessionStorage.substr = substring;
            sessionStorage.subcat = 10;
            SearchForItems();
            if (foundItems.length == 0){
                alert("Can't find anything");
            }
            else {
                window.location = "http://localhost:63342/direct-final-project/searched.html?_ijt=lafkpofulatdngofmma0huvpku";
            }
        });
    }

    else if (url == "http://localhost:63342/direct-final-project/searched.html?_ijt=lafkpofulatdngofmma0huvpku" && sessionStorage.subcat == 1){
        DrawListOfLots(tabletAccessories, 11, page , pageSize, 0);
        $('.sort').on('change', function() {
            if(this.value == "prize-down") {
                sessionStorage.subcat = 2;

                window.location = "http://localhost:63342/direct-final-project/searched.html?_ijt=lafkpofulatdngofmma0huvpku";
            }
            else if(this.value == "prize-up") {
                sessionStorage.subcat = 3;

                window.location = "http://localhost:63342/direct-final-project/searched.html?_ijt=lafkpofulatdngofmma0huvpku";
            }

        });
        $(".btn-srch").click(function() {


            substring = $(".finder").val();
            sessionStorage.substr = substring;

            sessionStorage.subcat = 10;
            SearchForItems();

            if (foundItems.length == 0){
                alert("Can't find anything");
            }
            else {
                window.location = "http://localhost:63342/direct-final-project/searched.html?_ijt=lafkpofulatdngofmma0huvpku";
            }
        });
    }

    else if (url == "http://localhost:63342/direct-final-project/searched.html?_ijt=lafkpofulatdngofmma0huvpku" && sessionStorage.subcat == 2){
        DrawListOfLots(result, 11, page , pageSize, 0);//Остановаился тут!!!!!!!!!!!!!!!(доделать именно lot-builting для sortalltables, и делать тогда через if else subcat всем фильтрам + добавить нехт и прев для всех subcat
        $('.sort').on('change', function() {
            if(this.value == "prize-down") {
                sessionStorage.subcat = 2;

                window.location = "http://localhost:63342/direct-final-project/searched.html?_ijt=lafkpofulatdngofmma0huvpku";
            }
            else if(this.value == "prize-up") {
                sessionStorage.subcat = 3;

                window.location = "http://localhost:63342/direct-final-project/searched.html?_ijt=lafkpofulatdngofmma0huvpku";
            }

        });
        $(".btn-srch").click(function() { // вот тут сейчас!!!!


            substring = $(".finder").val();
            sessionStorage.substr = substring;

            sessionStorage.subcat = 10;
            SearchForItems();

            if (foundItems.length == 0){
                alert("Can't find anything");
            }
            else {
                window.location = "http://localhost:63342/direct-final-project/searched.html?_ijt=lafkpofulatdngofmma0huvpku";
            }
        });
    }

    else if (url == "http://localhost:63342/direct-final-project/searched.html?_ijt=lafkpofulatdngofmma0huvpku" && sessionStorage.subcat == 3){
        DrawListOfLots(resultByPriceUp, 11, page , pageSize, 0);//Остановаился тут!!!!!!!!!!!!!!!(доделать именно lot-builting для sortalltables, и делать тогда через if else subcat всем фильтрам + добавить нехт и прев для всех subcat
        $('.sort').on('change', function() {
            if(this.value == "prize-down") {
                sessionStorage.subcat = 2;

                window.location = "http://localhost:63342/direct-final-project/searched.html?_ijt=lafkpofulatdngofmma0huvpku";
            }
            else if(this.value == "prize-up") {
                sessionStorage.subcat = 3;

                window.location = "http://localhost:63342/direct-final-project/searched.html?_ijt=lafkpofulatdngofmma0huvpku";
            }

        });
        $(".btn-srch").click(function() {


            substring = $(".finder").val();
            sessionStorage.substr = substring;

            sessionStorage.subcat = 10;
            SearchForItems();

            if (foundItems.length == 0){
                alert("Can't find anything");
            }
            else {
                window.location = "http://localhost:63342/direct-final-project/searched.html?_ijt=lafkpofulatdngofmma0huvpku";
            }
        });
    }

    else if (url == "http://localhost:63342/direct-final-project/searched.html?_ijt=lafkpofulatdngofmma0huvpku" && sessionStorage.subcat == 4){
        DrawListOfLots(resultTabletsByPriceDown, 1, page , pageSize, 0);
        $('.sort').on('change', function() {
            if(this.value == "prize-down") {
                sessionStorage.subcat = 4;

                window.location = "http://localhost:63342/direct-final-project/searched.html?_ijt=lafkpofulatdngofmma0huvpku";
            }
            else if(this.value == "prize-up") {
                sessionStorage.subcat = 5;

                window.location = "http://localhost:63342/direct-final-project/searched.html?_ijt=lafkpofulatdngofmma0huvpku";
            }

        });
        $(".btn-srch").click(function() {


            substring = $(".finder").val();
            sessionStorage.substr = substring;

            sessionStorage.subcat = 10;
            SearchForItems();

            if (foundItems.length == 0){
                alert("Can't find anything");
            }
            else {
                window.location = "http://localhost:63342/direct-final-project/searched.html?_ijt=lafkpofulatdngofmma0huvpku";
            }
        });
    }

    else if (url == "http://localhost:63342/direct-final-project/searched.html?_ijt=lafkpofulatdngofmma0huvpku" && sessionStorage.subcat == 5){
        DrawListOfLots(resultTabletsByPriceUp, 1, page , pageSize, 0);
        $('.sort').on('change', function() {
            if(this.value == "prize-down") {
                sessionStorage.subcat = 4;

                window.location = "http://localhost:63342/direct-final-project/searched.html?_ijt=lafkpofulatdngofmma0huvpku";
            }
            else if(this.value == "prize-up") {
                sessionStorage.subcat = 5;

                window.location = "http://localhost:63342/direct-final-project/searched.html?_ijt=lafkpofulatdngofmma0huvpku";
            }

        });
        $(".btn-srch").click(function() {


            substring = $(".finder").val();
            sessionStorage.substr = substring;

            sessionStorage.subcat = 10;
            SearchForItems();

            if (foundItems.length == 0){
                alert("Can't find anything");
            }
            else {
                window.location = "http://localhost:63342/direct-final-project/searched.html?_ijt=lafkpofulatdngofmma0huvpku";
            }
        });
    }

    else if (url == "http://localhost:63342/direct-final-project/searched.html?_ijt=lafkpofulatdngofmma0huvpku" && sessionStorage.subcat == 6){
        DrawListOfLots(resultPhonesByPriceDown, 0, page , pageSize, 0);
        $('.sort').on('change', function() {
            if(this.value == "prize-down") {
                sessionStorage.subcat = 6;

                window.location = "http://localhost:63342/direct-final-project/searched.html?_ijt=lafkpofulatdngofmma0huvpku";
            }
            else if(this.value == "prize-up") {
                sessionStorage.subcat = 7;

                window.location = "http://localhost:63342/direct-final-project/searched.html?_ijt=lafkpofulatdngofmma0huvpku";
            }

        });
        $(".btn-srch").click(function() {


            substring = $(".finder").val();
            sessionStorage.substr = substring;

            sessionStorage.subcat = 10;
            SearchForItems();

            if (foundItems.length == 0){
                alert("Can't find anything");
            }
            else {
                window.location = "http://localhost:63342/direct-final-project/searched.html?_ijt=lafkpofulatdngofmma0huvpku";
            }
        });
    }

    else if (url == "http://localhost:63342/direct-final-project/searched.html?_ijt=lafkpofulatdngofmma0huvpku" && sessionStorage.subcat == 7){
        DrawListOfLots(resultPhonesByPriceUp, 0, page , pageSize, 0);
        $('.sort').on('change', function() {
            if(this.value == "prize-down") {
                sessionStorage.subcat = 6;

                window.location = "http://localhost:63342/direct-final-project/searched.html?_ijt=lafkpofulatdngofmma0huvpku";
            }
            else if(this.value == "prize-up") {
                sessionStorage.subcat = 7;

                window.location = "http://localhost:63342/direct-final-project/searched.html?_ijt=lafkpofulatdngofmma0huvpku";
            }

        });
        $(".btn-srch").click(function() {


            substring = $(".finder").val();
            sessionStorage.substr = substring;

            sessionStorage.subcat = 10;
            SearchForItems();

            if (foundItems.length == 0){
                alert("Can't find anything");
            }
            else {
                window.location = "http://localhost:63342/direct-final-project/searched.html?_ijt=lafkpofulatdngofmma0huvpku";
            }
        });
    }

    else if (url == "http://localhost:63342/direct-final-project/searched.html?_ijt=lafkpofulatdngofmma0huvpku" && sessionStorage.subcat == 8){
        DrawListOfLots(resultHeadphonesByPriceDown, 2, page , pageSize, 0);
        $('.sort').on('change', function() {
            if(this.value == "prize-down") {
                sessionStorage.subcat = 8;

                window.location = "http://localhost:63342/direct-final-project/searched.html?_ijt=lafkpofulatdngofmma0huvpku";
            }
            else if(this.value == "prize-up") {
                sessionStorage.subcat = 9;

                window.location = "http://localhost:63342/direct-final-project/searched.html?_ijt=lafkpofulatdngofmma0huvpku";
            }

        });
        $(".btn-srch").click(function() {


            substring = $(".finder").val();
            sessionStorage.substr = substring;

            sessionStorage.subcat = 10;
            SearchForItems();

            if (foundItems.length == 0){
                alert("Can't find anything");
            }
            else {
                window.location = "http://localhost:63342/direct-final-project/searched.html?_ijt=lafkpofulatdngofmma0huvpku";
            }
        });
    }

    else if (url == "http://localhost:63342/direct-final-project/searched.html?_ijt=lafkpofulatdngofmma0huvpku" && sessionStorage.subcat == 9){
        DrawListOfLots(resultHeadphonesByPriceUp, 2, page , pageSize, 0);
        $('.sort').on('change', function() {
            if(this.value == "prize-down") {
                sessionStorage.subcat = 8;

                window.location = "http://localhost:63342/direct-final-project/searched.html?_ijt=lafkpofulatdngofmma0huvpku";
            }
            else if(this.value == "prize-up") {
                sessionStorage.subcat = 9;

                window.location = "http://localhost:63342/direct-final-project/searched.html?_ijt=lafkpofulatdngofmma0huvpku";
            }

        });
        $(".btn-srch").click(function() {


            substring = $(".finder").val();
            sessionStorage.substr = substring;

            sessionStorage.subcat = 10;
            SearchForItems();

            if (foundItems.length == 0){
                alert("Can't find anything");
            }
            else {
                window.location = "http://localhost:63342/direct-final-project/searched.html?_ijt=lafkpofulatdngofmma0huvpku";
            }
        });
    }

    else if (url == "http://localhost:63342/direct-final-project/searched.html?_ijt=lafkpofulatdngofmma0huvpku" && sessionStorage.subcat == 10){
        console.log("substr " + sessionStorage.substr );
        DrawListOfLots(foundItems, 2, page , pageSize, 0);
        $('.sort').on('change', function() {
            if(this.value == "prize-down") {
                sessionStorage.subcat = 11;

                window.location = "http://localhost:63342/direct-final-project/searched.html?_ijt=lafkpofulatdngofmma0huvpku";
            }
            else if(this.value == "prize-up") {
                sessionStorage.subcat = 10;

                window.location = "http://localhost:63342/direct-final-project/searched.html?_ijt=lafkpofulatdngofmma0huvpku";
            }

        });
        $(".btn-srch").click(function() {


            substring = $(".finder").val();
            sessionStorage.substr = substring;

            sessionStorage.subcat = 10;
            SearchForItems();

            if (foundItems.length == 0){
                alert("Can't find anything");
            }
            else {
                window.location = "http://localhost:63342/direct-final-project/searched.html?_ijt=lafkpofulatdngofmma0huvpku";
            }
        });
    }

    else if (url == "http://localhost:63342/direct-final-project/searched.html?_ijt=lafkpofulatdngofmma0huvpku" && sessionStorage.subcat == 11){
        foundItemsbyPriceUp = foundItemsUp.sort(SortByPrizeReverse);
        DrawListOfLots(foundItemsbyPriceUp, 2, page , pageSize, 0);
        $('.sort').on('change', function() {
            if(this.value == "prize-down") {
                sessionStorage.subcat = 11;

                window.location = "http://localhost:63342/direct-final-project/searched.html?_ijt=lafkpofulatdngofmma0huvpku";
            }
            else if(this.value == "prize-up") {
                sessionStorage.subcat = 10;

                window.location = "http://localhost:63342/direct-final-project/searched.html?_ijt=lafkpofulatdngofmma0huvpku";
            }

        });
        $(".btn-srch").click(function() {


            substring = $(".finder").val();
            sessionStorage.substr = substring;

            sessionStorage.subcat = 10;
            SearchForItems();

            if (foundItems.length == 0){
                alert("Can't find anything");
            }
            else {
                window.location = "http://localhost:63342/direct-final-project/searched.html?_ijt=lafkpofulatdngofmma0huvpku";
            }
        });
    }

    else if (url == "http://localhost:63342/direct-final-project/searched.html?_ijt=lafkpofulatdngofmma0huvpku" && sessionStorage.subcat == 12){
        DrawListOfLots(foundItemsUp, 2, page , pageSize, 0);
        $('.sort').on('change', function() {
            if(this.value == "prize-down") {
                sessionStorage.subcat = 11;

                window.location = "http://localhost:63342/direct-final-project/searched.html?_ijt=lafkpofulatdngofmma0huvpku";
            }
            else if(this.value == "prize-up") {
                sessionStorage.subcat = 10;

                window.location = "http://localhost:63342/direct-final-project/searched.html?_ijt=lafkpofulatdngofmma0huvpku";
            }

        });
        $(".btn-srch").click(function() {


            substring = $(".finder").val();
            sessionStorage.substr = substring;

            sessionStorage.subcat = 10;
            SearchForItems();

            if (foundItems.length == 0){
                alert("Can't find anything");
            }
            else {
                window.location = "http://localhost:63342/direct-final-project/searched.html?_ijt=lafkpofulatdngofmma0huvpku";
            }
        });
    }

    $("#tab").click(function () {
        sessionStorage.subcat = 0; //0 - отображать планшеты, 1 - аксс., 2 -
    });

    $("#acc").click(function () {
        sessionStorage.subcat = 1; //0 - отображать планшеты, 1 - аксс.
    });

    $(".btn-srch").click(function() {


        substring = $(".finder").val();
        sessionStorage.substr = substring;

        sessionStorage.subcat = 10;
        SearchForItems();

        if (foundItems.length == 0){
            alert("Can't find anything");
        }
        else {
            window.location = "http://localhost:63342/direct-final-project/searched.html?_ijt=lafkpofulatdngofmma0huvpku";
        }
    });

    //отрисовка лотов(списка)

    $(".lot").click(function () {
        if ($(this).data("category") == 11){
            if ($(".lot").index(this) > tabletAccessories.length-1){
                sessionStorage.indexOfLot = $(".lot").index(this) - tablets.length;
            }
            else {
                sessionStorage.indexOfLot = $(".lot").index(this);
            }
        }
        else if ($(this).data("category") == 0 || $(this).data("category") == 1 || $(this).data("category") == 3 || $(this).data("category") == 2) {
            sessionStorage.indexOfLot = $(".lot").index(this) + (page * pageSize);
        }
        sessionStorage.category = $(this).data("category");

        window.location = "http://localhost:63342/direct-final-project/lot_template.html?_ijt=o4rlfeccbjh7tlod9j1p3sk9uj";
    });


    function DrawListOfLots(n , k, currentPage, size, repeat) {
        length = n.length;
        part = n.length - size*currentPage;
        var end = (currentPage+1) * size;

        if (part <= size){
            end = (currentPage * size) + part;
            part = 0;
        }

        for (var j = currentPage * size; j < end; j++) {
            var div = document.createElement("div");
            var div1 = document.createElement("div");
            var div2 = document.createElement("div");
            var image = document.createElement("img");

            if (n[j].cat == 0){
                div.className = "lot tel";
            }
            else if (n[j].cat == 1 || n[j].cat == 3){
                div.className = "lot tab";
            }
            else if (n[j].cat == 11){
                div.className = "lot taba";
            }
            else if (n[j].cat == 10){
                div.className = "lot tela";
            }
            else if (n[j].cat == 2){
                div.className = "lot headphone";
            }
            div1.className = "lot-left";
            div2.className = "lot-right";
            image.className = "lot-main-image";
            var txt = document.createElement("h2");
            txt.className = "lot-name";
            txt.innerHTML = n[j].name.toString();
            var txt1 = document.createElement("h4");
            txt1.className = "lot-prize";
            txt1.innerHTML = n[j].prize.toString() + " UAH";
            var txt2 = document.createElement("p");
            txt2.className = "lot-region";
            txt2.innerHTML = "г." + n[j].region.toString().toUpperCase();
            var txt3 = document.createElement("p");
            txt3.className = "lot-shipment";
            txt3.innerHTML = "Доставка " + n[j].shipment.toString() + "  грн.";
            image.src = n[j].image[0];
            div2.append(txt);
            div2.append(txt1);
            div2.append(txt2);
            div2.append(txt3);
            div1.append(image);
            div.appendChild(div1);
            div.appendChild(div2);
            $(".lots").append(div); //добавляем к элементу класс (телфон и тд). и поиск по нему.


            if (n[j].cat == 0){
                $(".tel").data("category", n[j].cat);
            }
            else if (n[j].cat == 1 ||n[j].cat == 3){
                $(".tab").data("category", n[j].cat);
            }
            else if (n[j].cat == 11){
                $(".taba").data("category", n[j].cat);
            }
            else if (n[j].cat == 10){
                $(".tela").data("category", n[j].cat);
            }
            else if (n[j].cat == 2){
                $(".headphone").data("category", n[j].cat);
            }
        }

        if ((k == 0 || k==1 ) && (repeat!= 1) && sessionStorage.subcat == 1){ //(количество элементов в подпункте)
            $(".telephone li")[1].append("(" + n.length + ")");
        }

        else if ((k == 0 || k==1 ) && (repeat!= 1) && (sessionStorage.subcat == 6 || sessionStorage.subcat == 7)){
            $(".subcategories").empty();
            var list = document.createElement("li");
            var list1 = document.createElement("li");
            var link = document.createElement("a");
            var link1 = document.createElement("a");
            link.innerHTML = "Телефоны, смартфоны ";
            link1.innerHTML = "Акссесуары ";
            list.appendChild(link);
            list1.appendChild(link1);
            $(".subcategories").append(list, list1);
            $(".telephone li")[0].append(" (" + n.length + ")");

        }

        else if ((k == 0 || k==1 || k==2) && (repeat!= 1) && (sessionStorage.subcat == 8 || sessionStorage.subcat == 9)){
            $(".subcategories").empty();
            var list = document.createElement("li");
            var link = document.createElement("a");
            link.innerHTML = "Наушники ";
            list.appendChild(link);
            $(".subcategories").append(list);
            $(".telephone li")[0].append(" (" + n.length + ")");

        }

        else if ((k == 0 || k==1 || k==2) && (repeat!= 1) && (sessionStorage.subcat == 10 || sessionStorage.subcat == 11)){
            console.log("Hereeee");
            $(".subcategories").empty();
            var list = document.createElement("li");
            var link = document.createElement("a");
            link.innerHTML = "Соответсвующие товары ";
            list.appendChild(link);
            $(".subcategories").append(list);
            $(".telephone li")[0].append(" (" + n.length + ")");
        }

        else if ((k == 0 || k==1 || k==2) && (repeat!= 1)){
            $(".telephone li")[0].append(" (" + n.length + ")");
        }

        else if ((k == 0 || k==1 || k==2) && (repeat!= 1) && sessionStorage.subcat == 1){
            $(".telephone li")[0].append(" (" + n.length + ")");
        }

        else if ((k == 0 || k==1 || k==2) && (repeat == 1)){}

        else if (k == 3 && (repeat!= 1)){
            $(".telephone li")[0].append(" (" + tablets.length + ")");
            $(".telephone li")[1].append(" (" + tabletAccessories.length + ")");
        }
        else if (k == 3 && (repeat == 1)){}

        else if (k == 11 && (repeat != 1) && sessionStorage.subcat == 2 || sessionStorage.subcat == 3) { //
            $(".telephone li")[0].append(" (" + tablets.length + ")");
            $(".telephone li")[1].append(" (" + tabletAccessories.length + ")");
        }

        else if (k == 11 && (repeat != 1)) { //
            $(".telephone li")[1].append(" (" + n.length + ")");
        }

        else if (k == 11 && (repeat == 1)) {}
        var url = window.location.href;

    }


    $(".btn-frwd").click(function () {
            NextPage();
        });

    $(".btn-bck").click(function () {
           PrevPage();
        });



    function NextPage() {
    if (part > 0) {
        if (url == "http://localhost:63342/direct-final-project/tablet.html?_ijt=hpvi4d1iijpn44m8e0tm31kufn") {
            var h2 = document.createElement("h2");
            h2.innerHTML = "Лоты";
            h2.className = "m";
            $(".lots").empty().append(h2);
            page = page + 1;

            DrawListOfLots(alltablets, 3, page, pageSize, 1);
            $(".lot").click(function () {
                if ($(this).data("category") == 11) {
                    if ($(".lot").index(this) > tabletAccessories.length - 1) {
                        sessionStorage.indexOfLot = $(".lot").index(this) - tablets.length;
                    }
                    else {
                        sessionStorage.indexOfLot = $(".lot").index(this);
                    }
                }

                else if ($(this).data("category") == 0 || $(this).data("category") == 1 || $(this).data("category") == 3 || $(this).data("category") == 2) {
                    sessionStorage.indexOfLot = $(".lot").index(this) + (page * pageSize);
                }
                sessionStorage.category = $(this).data("category");

                window.location = "http://localhost:63342/direct-final-project/lot_template.html?_ijt=o4rlfeccbjh7tlod9j1p3sk9uj";
            });
        }

        else if (url == "http://localhost:63342/direct-final-project/tel.html?_ijt=6i5e30fifp9ggk3nk1bechqr7m") {
            var h2 = document.createElement("h2");
            h2.innerHTML = "Лоты";
            h2.className = "m";
            $(".lots").empty().append(h2);
            page = page + 1;

            DrawListOfLots(telephone, 0 ,page, pageSize,1);
            $(".lot").click(function () {
                if ($(this).data("category") == 11){
                    if ($(".lot").index(this) > tabletAccessories.length-1){
                        sessionStorage.indexOfLot = $(".lot").index(this) - tablets.length;
                    }
                    else {
                        sessionStorage.indexOfLot = $(".lot").index(this);
                    }
                }
                else if ($(this).data("category") == 0 || $(this).data("category") == 1 || $(this).data("category") == 3 || $(this).data("category") == 2) {
                    sessionStorage.indexOfLot = $(".lot").index(this) + (page * pageSize);
                }
                sessionStorage.category = $(this).data("category");

                window.location = "http://localhost:63342/direct-final-project/lot_template.html?_ijt=o4rlfeccbjh7tlod9j1p3sk9uj";
            });
        }

        else if (url == "http://localhost:63342/direct-final-project/headphone.html?_ijt=6rgh55gdn7bo4ed6pvqntnv9sd") {
            var h2 = document.createElement("h2");
            h2.innerHTML = "Лоты";
            h2.className = "m";
            $(".lots").empty().append(h2);
            page = page + 1;

            DrawListOfLots(headphones, 0 ,page, pageSize,1);
            $(".lot").click(function () {
                if ($(this).data("category") == 11){
                    if ($(".lot").index(this) > tabletAccessories.length-1){
                        sessionStorage.indexOfLot = $(".lot").index(this) - tablets.length;
                    }
                    else {
                        sessionStorage.indexOfLot = $(".lot").index(this);
                    }
                }
                else if ($(this).data("category") == 0 || $(this).data("category") == 1 || $(this).data("category") == 3 || $(this).data("category") == 2) {
                    sessionStorage.indexOfLot = $(".lot").index(this) + (page * pageSize);
                }
                sessionStorage.category = $(this).data("category");

                window.location = "http://localhost:63342/direct-final-project/lot_template.html?_ijt=o4rlfeccbjh7tlod9j1p3sk9uj";
            });
        }

        else if (url == "http://localhost:63342/direct-final-project/searched.html?_ijt=lafkpofulatdngofmma0huvpku" && sessionStorage.subcat == 0) {
            var h2 = document.createElement("h2");
            h2.innerHTML = "Лоты";
            h2.className = "m";
            $(".lots").empty().append(h2);
            page = page + 1;

            DrawListOfLots(tablets, 0 ,page, pageSize,1);
            $(".lot").click(function () {
                if ($(this).data("category") == 11){
                    if ($(".lot").index(this) > tabletAccessories.length-1){
                        sessionStorage.indexOfLot = $(".lot").index(this) - tablets.length;
                    }
                    else {
                        sessionStorage.indexOfLot = $(".lot").index(this);
                    }
                }
                else if ($(this).data("category") == 0 || $(this).data("category") == 1 || $(this).data("category") == 3 || $(this).data("category") == 2) {
                    sessionStorage.indexOfLot = $(".lot").index(this) + (page * pageSize);
                }
                sessionStorage.category = $(this).data("category");

                window.location = "http://localhost:63342/direct-final-project/lot_template.html?_ijt=o4rlfeccbjh7tlod9j1p3sk9uj";
            });
        }

        else if (url == "http://localhost:63342/direct-final-project/searched.html?_ijt=lafkpofulatdngofmma0huvpku" && sessionStorage.subcat == 1) {
            var h2 = document.createElement("h2");
            h2.innerHTML = "Лоты";
            h2.className = "m";
            $(".lots").empty().append(h2);
            page = page + 1;

            DrawListOfLots(tabletAccessories, 0 ,page, pageSize,1);
            $(".lot").click(function () {
                if ($(this).data("category") == 11){
                    if ($(".lot").index(this) > tabletAccessories.length-1){
                        sessionStorage.indexOfLot = $(".lot").index(this) - tablets.length;
                    }
                    else {
                        sessionStorage.indexOfLot = $(".lot").index(this);
                    }
                }
                else if ($(this).data("category") == 0 || $(this).data("category") == 1 || $(this).data("category") == 3 || $(this).data("category") == 2) {
                    sessionStorage.indexOfLot = $(".lot").index(this) + (page * pageSize);
                }
                sessionStorage.category = $(this).data("category");

                window.location = "http://localhost:63342/direct-final-project/lot_template.html?_ijt=o4rlfeccbjh7tlod9j1p3sk9uj";
            });
        }

        else if (url == "http://localhost:63342/direct-final-project/searched.html?_ijt=lafkpofulatdngofmma0huvpku" && sessionStorage.subcat == 2) {
            var h2 = document.createElement("h2");
            h2.innerHTML = "Лоты";
            h2.className = "m";
            $(".lots").empty().append(h2);
            page = page + 1;

            DrawListOfLots(result, 0 ,page, pageSize,1);
            $(".lot").click(function () {
                if ($(this).data("category") == 11){
                    if ($(".lot").index(this) > tabletAccessories.length-1){
                        sessionStorage.indexOfLot = $(".lot").index(this) - tablets.length;
                    }
                    else {
                        sessionStorage.indexOfLot = $(".lot").index(this);
                    }
                }
                else if ($(this).data("category") == 0 || $(this).data("category") == 1 || $(this).data("category") == 3 || $(this).data("category") == 2) {
                    sessionStorage.indexOfLot = $(".lot").index(this) + (page * pageSize);
                }
                sessionStorage.category = $(this).data("category");

                window.location = "http://localhost:63342/direct-final-project/lot_template.html?_ijt=o4rlfeccbjh7tlod9j1p3sk9uj";
            });
        }

        else if (url == "http://localhost:63342/direct-final-project/searched.html?_ijt=lafkpofulatdngofmma0huvpku" && sessionStorage.subcat == 3) {
            var h2 = document.createElement("h2");
            h2.innerHTML = "Лоты";
            h2.className = "m";
            $(".lots").empty().append(h2);
            page = page + 1;

            DrawListOfLots(resultByPriceUp, 0 ,page, pageSize,1);
            $(".lot").click(function () {
                if ($(this).data("category") == 11){
                    if ($(".lot").index(this) > tabletAccessories.length-1){
                        sessionStorage.indexOfLot = $(".lot").index(this) - tablets.length;
                    }
                    else {
                        sessionStorage.indexOfLot = $(".lot").index(this);
                    }
                }
                else if ($(this).data("category") == 0 || $(this).data("category") == 1 || $(this).data("category") == 3 || $(this).data("category") == 2) {
                    sessionStorage.indexOfLot = $(".lot").index(this) + (page * pageSize);
                }
                sessionStorage.category = $(this).data("category");

                window.location = "http://localhost:63342/direct-final-project/lot_template.html?_ijt=o4rlfeccbjh7tlod9j1p3sk9uj";
            });
        }

        else if (url == "http://localhost:63342/direct-final-project/searched.html?_ijt=lafkpofulatdngofmma0huvpku" && sessionStorage.subcat == 4) {
            var h2 = document.createElement("h2");
            h2.innerHTML = "Лоты";
            h2.className = "m";
            $(".lots").empty().append(h2);
            page = page + 1;

            DrawListOfLots(resultTabletsByPriceDown, 1 ,page, pageSize,1);
            $(".lot").click(function () {
                if ($(this).data("category") == 11){
                    if ($(".lot").index(this) > tabletAccessories.length-1){
                        sessionStorage.indexOfLot = $(".lot").index(this) - tablets.length;
                    }
                    else {
                        sessionStorage.indexOfLot = $(".lot").index(this);
                    }
                }
                else if ($(this).data("category") == 0 || $(this).data("category") == 1 || $(this).data("category") == 3 || $(this).data("category") == 2) {
                    sessionStorage.indexOfLot = $(".lot").index(this) + (page * pageSize);
                }

                sessionStorage.category = $(this).data("category");

                window.location = "http://localhost:63342/direct-final-project/lot_template.html?_ijt=o4rlfeccbjh7tlod9j1p3sk9uj";
            });
        }

        else if (url == "http://localhost:63342/direct-final-project/searched.html?_ijt=lafkpofulatdngofmma0huvpku" && sessionStorage.subcat == 5) {
            var h2 = document.createElement("h2");
            h2.innerHTML = "Лоты";
            h2.className = "m";
            $(".lots").empty().append(h2);
            page = page + 1;

            DrawListOfLots(resultTabletsByPriceUp, 1 ,page, pageSize,1);
            $(".lot").click(function () {
                if ($(this).data("category") == 11){
                    if ($(".lot").index(this) > tabletAccessories.length-1){
                        sessionStorage.indexOfLot = $(".lot").index(this) - tablets.length;
                    }
                    else {
                        sessionStorage.indexOfLot = $(".lot").index(this);
                    }
                }

                else if ($(this).data("category") == 0 || $(this).data("category") == 1 || $(this).data("category") == 3 || $(this).data("category") == 2) {
                    sessionStorage.indexOfLot = $(".lot").index(this) + (page * pageSize);
                }
                sessionStorage.category = $(this).data("category");

                window.location = "http://localhost:63342/direct-final-project/lot_template.html?_ijt=o4rlfeccbjh7tlod9j1p3sk9uj";
            });
        }

        else if (url == "http://localhost:63342/direct-final-project/searched.html?_ijt=lafkpofulatdngofmma0huvpku" && sessionStorage.subcat == 6) {
            var h2 = document.createElement("h2");
            h2.innerHTML = "Лоты";
            h2.className = "m";
            $(".lots").empty().append(h2);
            page = page + 1;

            DrawListOfLots(resultPhonesByPriceDown, 0 ,page, pageSize,1);
            $(".lot").click(function () {
                if ($(this).data("category") == 11){
                    if ($(".lot").index(this) > tabletAccessories.length-1){
                        sessionStorage.indexOfLot = $(".lot").index(this) - tablets.length;
                    }
                    else {
                        sessionStorage.indexOfLot = $(".lot").index(this);
                    }
                }
                else if ($(this).data("category") == 0 || $(this).data("category") == 1 || $(this).data("category") == 3 || $(this).data("category") == 2) {
                    sessionStorage.indexOfLot = $(".lot").index(this) + (page * pageSize);
                }
                sessionStorage.category = $(this).data("category");

                window.location = "http://localhost:63342/direct-final-project/lot_template.html?_ijt=o4rlfeccbjh7tlod9j1p3sk9uj";
            });
        }

        else if (url == "http://localhost:63342/direct-final-project/searched.html?_ijt=lafkpofulatdngofmma0huvpku" && sessionStorage.subcat == 7) {
            var h2 = document.createElement("h2");
            h2.innerHTML = "Лоты";
            h2.className = "m";
            $(".lots").empty().append(h2);
            page = page + 1;

            DrawListOfLots(resultPhonesByPriceUp, 0 ,page, pageSize,1);
            $(".lot").click(function () {
                if ($(this).data("category") == 11){
                    if ($(".lot").index(this) > tabletAccessories.length-1){
                        sessionStorage.indexOfLot = $(".lot").index(this) - tablets.length;
                    }
                    else {
                        sessionStorage.indexOfLot = $(".lot").index(this);
                    }
                }
                else if ($(this).data("category") == 0 || $(this).data("category") == 1 || $(this).data("category") == 3 || $(this).data("category") == 2) {
                    sessionStorage.indexOfLot = $(".lot").index(this) + (page * pageSize);
                }
                sessionStorage.category = $(this).data("category");

                window.location = "http://localhost:63342/direct-final-project/lot_template.html?_ijt=o4rlfeccbjh7tlod9j1p3sk9uj";
            });
        }

        else if (url == "http://localhost:63342/direct-final-project/searched.html?_ijt=lafkpofulatdngofmma0huvpku" && sessionStorage.subcat == 8) {
            var h2 = document.createElement("h2");
            h2.innerHTML = "Лоты";
            h2.className = "m";
            $(".lots").empty().append(h2);
            page = page + 1;

            DrawListOfLots(resultHeadphonesByPriceDown, 2 ,page, pageSize,1);
            $(".lot").click(function () {
                if ($(this).data("category") == 11){
                    if ($(".lot").index(this) > tabletAccessories.length-1){
                        sessionStorage.indexOfLot = $(".lot").index(this) - tablets.length;
                    }
                    else {
                        sessionStorage.indexOfLot = $(".lot").index(this);
                    }
                }
                else if ($(this).data("category") == 0 || $(this).data("category") == 1 || $(this).data("category") == 3 || $(this).data("category") == 2) {
                    sessionStorage.indexOfLot = $(".lot").index(this) + (page * pageSize);
                }
                sessionStorage.category = $(this).data("category");

                window.location = "http://localhost:63342/direct-final-project/lot_template.html?_ijt=o4rlfeccbjh7tlod9j1p3sk9uj";
            });
        }

        else if (url == "http://localhost:63342/direct-final-project/searched.html?_ijt=lafkpofulatdngofmma0huvpku" && sessionStorage.subcat == 9) {
            var h2 = document.createElement("h2");
            h2.innerHTML = "Лоты";
            h2.className = "m";
            $(".lots").empty().append(h2);
            page = page + 1;

            DrawListOfLots(resultHeadphonesByPriceUp, 2 ,page, pageSize,1);
            $(".lot").click(function () {
                if ($(this).data("category") == 11){
                    if ($(".lot").index(this) > tabletAccessories.length-1){
                        sessionStorage.indexOfLot = $(".lot").index(this) - tablets.length;
                    }
                    else {
                        sessionStorage.indexOfLot = $(".lot").index(this);
                    }
                }
                else if ($(this).data("category") == 0 || $(this).data("category") == 1 || $(this).data("category") == 3 || $(this).data("category") == 2) {
                    sessionStorage.indexOfLot = $(".lot").index(this) + (page * pageSize);
                }
                sessionStorage.category = $(this).data("category");

                window.location = "http://localhost:63342/direct-final-project/lot_template.html?_ijt=o4rlfeccbjh7tlod9j1p3sk9uj";
            });
        }

        else if (url == "http://localhost:63342/direct-final-project/searched.html?_ijt=lafkpofulatdngofmma0huvpku" && sessionStorage.subcat == 10) {
            var h2 = document.createElement("h2");
            h2.innerHTML = "Лоты";
            h2.className = "m";
            $(".lots").empty().append(h2);
            page = page + 1;

            DrawListOfLots(foundItems, 2 ,page, pageSize,1);
            $(".lot").click(function () {
                if ($(this).data("category") == 11){
                    if ($(".lot").index(this) > tabletAccessories.length-1){
                        sessionStorage.indexOfLot = $(".lot").index(this) - tablets.length;
                    }
                    else {
                        sessionStorage.indexOfLot = $(".lot").index(this);
                    }
                }
                else if ($(this).data("category") == 0 || $(this).data("category") == 1 || $(this).data("category") == 3 || $(this).data("category") == 2) {
                    sessionStorage.indexOfLot = $(".lot").index(this) + (page * pageSize);
                }
                sessionStorage.category = $(this).data("category");

                window.location = "http://localhost:63342/direct-final-project/lot_template.html?_ijt=o4rlfeccbjh7tlod9j1p3sk9uj";
            });
        }

        else if (url == "http://localhost:63342/direct-final-project/searched.html?_ijt=lafkpofulatdngofmma0huvpku" && sessionStorage.subcat == 11) {
            var h2 = document.createElement("h2");
            h2.innerHTML = "Лоты";
            h2.className = "m";
            $(".lots").empty().append(h2);
            page = page + 1;

            foundItemsbyPriceUp = foundItemsUp.sort(SortByPrizeReverse);
            DrawListOfLots(foundItemsbyPriceUp, 2 ,page, pageSize,1);
            $(".lot").click(function () {
                if ($(this).data("category") == 11){
                    if ($(".lot").index(this) > tabletAccessories.length-1){
                        sessionStorage.indexOfLot = $(".lot").index(this) - tablets.length;
                    }
                    else {
                        sessionStorage.indexOfLot = $(".lot").index(this);
                    }
                }
                else if ($(this).data("category") == 0 || $(this).data("category") == 1 || $(this).data("category") == 3 || $(this).data("category") == 2) {
                    sessionStorage.indexOfLot = $(".lot").index(this) + (page * pageSize);
                }
                sessionStorage.category = $(this).data("category");

                window.location = "http://localhost:63342/direct-final-project/lot_template.html?_ijt=o4rlfeccbjh7tlod9j1p3sk9uj";
            });
        }
    }

    }

    function PrevPage() {
        if (part < length && page != 0) {
            if (url == "http://localhost:63342/direct-final-project/tablet.html?_ijt=hpvi4d1iijpn44m8e0tm31kufn") {
                var h2 = document.createElement("h2");
                h2.innerHTML = "Лоты";
                h2.className = "m";
                $(".lots").empty().append(h2);
                page = page - 1;

                DrawListOfLots(alltablets, 3, page, pageSize, 1);
                $(".lot").click(function () {
                        if ($(this).data("category") == 11) {
                            if ($(".lot").index(this) > tabletAccessories.length - 1) {
                                sessionStorage.indexOfLot = $(".lot").index(this) - tablets.length;
                            }
                            else {
                                sessionStorage.indexOfLot = $(".lot").index(this);
                            }
                        }
                        else if ($(this).data("category") == 0 || $(this).data("category") == 1 || $(this).data("category") == 3 || $(this).data("category") == 2) {
                            sessionStorage.indexOfLot = $(".lot").index(this) + (page * pageSize);
                        }
                        sessionStorage.category = $(this).data("category");

                        window.location = "http://localhost:63342/direct-final-project/lot_template.html?_ijt=o4rlfeccbjh7tlod9j1p3sk9uj";
                    });
            }

            else if (url == "http://localhost:63342/direct-final-project/tel.html?_ijt=6i5e30fifp9ggk3nk1bechqr7m") {
                var h2 = document.createElement("h2");
                h2.innerHTML = "Лоты";
                h2.className = "m";
                $(".lots").empty().append(h2);
                page = page - 1;

                DrawListOfLots(telephone, 0 ,page, pageSize,1);
                $(".lot").click(function () {
                    if ($(this).data("category") == 11){
                        if ($(".lot").index(this) > tabletAccessories.length-1){
                            sessionStorage.indexOfLot = $(".lot").index(this) - tablets.length;
                        }
                        else {
                            sessionStorage.indexOfLot = $(".lot").index(this);
                        }
                    }
                    else if ($(this).data("category") == 0 || $(this).data("category") == 1 || $(this).data("category") == 3 || $(this).data("category") == 2) {
                        sessionStorage.indexOfLot = $(".lot").index(this) + (page * pageSize);
                    }
                    sessionStorage.category = $(this).data("category");

                    window.location = "http://localhost:63342/direct-final-project/lot_template.html?_ijt=o4rlfeccbjh7tlod9j1p3sk9uj";
                });
            }

            else if (url == "http://localhost:63342/direct-final-project/headphone.html?_ijt=6rgh55gdn7bo4ed6pvqntnv9sd") {
                var h2 = document.createElement("h2");
                h2.innerHTML = "Лоты";
                h2.className = "m";
                $(".lots").empty().append(h2);
                page = page - 1;

                DrawListOfLots(headphones, 0 ,page, pageSize,1);
                $(".lot").click(function () {
                    if ($(this).data("category") == 11){
                        if ($(".lot").index(this) > tabletAccessories.length-1){
                            sessionStorage.indexOfLot = $(".lot").index(this) - tablets.length;
                        }
                        else {
                            sessionStorage.indexOfLot = $(".lot").index(this);
                        }
                    }
                    else if ($(this).data("category") == 0 || $(this).data("category") == 1 || $(this).data("category") == 3 || $(this).data("category") == 2) {
                        sessionStorage.indexOfLot = $(".lot").index(this) + (page * pageSize);
                    }
                    sessionStorage.category = $(this).data("category");

                    window.location = "http://localhost:63342/direct-final-project/lot_template.html?_ijt=o4rlfeccbjh7tlod9j1p3sk9uj";
                });
            }

            else if (url == "http://localhost:63342/direct-final-project/searched.html?_ijt=lafkpofulatdngofmma0huvpku" && sessionStorage.subcat == 0) {
                var h2 = document.createElement("h2");
                h2.innerHTML = "Лоты";
                h2.className = "m";
                $(".lots").empty().append(h2);
                page = page - 1;

                DrawListOfLots(tablets, 0 ,page, pageSize,1);
                $(".lot").click(function () {
                    if ($(this).data("category") == 11){
                        if ($(".lot").index(this) > tabletAccessories.length-1){
                            sessionStorage.indexOfLot = $(".lot").index(this) - tablets.length;
                        }
                        else {
                            sessionStorage.indexOfLot = $(".lot").index(this);
                        }
                    }
                    else if ($(this).data("category") == 0 || $(this).data("category") == 1 || $(this).data("category") == 3 || $(this).data("category") == 2) {
                        sessionStorage.indexOfLot = $(".lot").index(this) + (page * pageSize);
                    }
                    sessionStorage.category = $(this).data("category");

                    window.location = "http://localhost:63342/direct-final-project/lot_template.html?_ijt=o4rlfeccbjh7tlod9j1p3sk9uj";
                });
            }

            else if (url == "http://localhost:63342/direct-final-project/searched.html?_ijt=lafkpofulatdngofmma0huvpku" && sessionStorage.subcat == 1) {
                var h2 = document.createElement("h2");
                h2.innerHTML = "Лоты";
                h2.className = "m";
                $(".lots").empty().append(h2);
                page = page - 1;

                DrawListOfLots(tabletAccessories, 0 ,page, pageSize,1);
                $(".lot").click(function () {
                    if ($(this).data("category") == 11){
                        if ($(".lot").index(this) > tabletAccessories.length-1){
                            sessionStorage.indexOfLot = $(".lot").index(this) - tablets.length;
                        }
                        else {
                            sessionStorage.indexOfLot = $(".lot").index(this);
                        }
                    }
                    else if ($(this).data("category") == 0 || $(this).data("category") == 1 || $(this).data("category") == 3 || $(this).data("category") == 2) {
                        sessionStorage.indexOfLot = $(".lot").index(this) + (page * pageSize);
                    }
                    sessionStorage.category = $(this).data("category");

                    window.location = "http://localhost:63342/direct-final-project/lot_template.html?_ijt=o4rlfeccbjh7tlod9j1p3sk9uj";
                });
            }

            else if (url == "http://localhost:63342/direct-final-project/searched.html?_ijt=lafkpofulatdngofmma0huvpku" && sessionStorage.subcat == 2) {
                var h2 = document.createElement("h2");
                h2.innerHTML = "Лоты";
                h2.className = "m";
                $(".lots").empty().append(h2);
                page = page - 1;

                DrawListOfLots(result, 0 ,page, pageSize,1);
                $(".lot").click(function () {
                    if ($(this).data("category") == 11){
                        if ($(".lot").index(this) > tabletAccessories.length-1){
                            sessionStorage.indexOfLot = $(".lot").index(this) - tablets.length;
                        }
                        else {
                            sessionStorage.indexOfLot = $(".lot").index(this);
                        }
                    }
                    else if ($(this).data("category") == 0 || $(this).data("category") == 1 || $(this).data("category") == 3 || $(this).data("category") == 2) {
                        sessionStorage.indexOfLot = $(".lot").index(this) + (page * pageSize);
                    }

                    sessionStorage.category = $(this).data("category");

                    window.location = "http://localhost:63342/direct-final-project/lot_template.html?_ijt=o4rlfeccbjh7tlod9j1p3sk9uj";
                });
            }

            else if (url == "http://localhost:63342/direct-final-project/searched.html?_ijt=lafkpofulatdngofmma0huvpku" && sessionStorage.subcat == 3) {
                var h2 = document.createElement("h2");
                h2.innerHTML = "Лоты";
                h2.className = "m";
                $(".lots").empty().append(h2);
                page = page - 1;

                DrawListOfLots(resultByPriceUp, 0 ,page, pageSize,1);
                $(".lot").click(function () {
                    if ($(this).data("category") == 11){
                        if ($(".lot").index(this) > tabletAccessories.length-1){
                            sessionStorage.indexOfLot = $(".lot").index(this) - tablets.length;
                        }
                        else {
                            sessionStorage.indexOfLot = $(".lot").index(this);
                        }
                    }
                    else if ($(this).data("category") == 0 || $(this).data("category") == 1 || $(this).data("category") == 3 || $(this).data("category") == 2) {
                        sessionStorage.indexOfLot = $(".lot").index(this) + (page * pageSize);
                    }
                    sessionStorage.category = $(this).data("category");

                    window.location = "http://localhost:63342/direct-final-project/lot_template.html?_ijt=o4rlfeccbjh7tlod9j1p3sk9uj";
                });
            }

            else if (url == "http://localhost:63342/direct-final-project/searched.html?_ijt=lafkpofulatdngofmma0huvpku" && sessionStorage.subcat == 4) {
                var h2 = document.createElement("h2");
                h2.innerHTML = "Лоты";
                h2.className = "m";
                $(".lots").empty().append(h2);
                page = page - 1;

                DrawListOfLots(resultTabletsByPriceDown, 1 ,page, pageSize,1);
                $(".lot").click(function () {
                    if ($(this).data("category") == 11){
                        if ($(".lot").index(this) > tabletAccessories.length-1){
                            sessionStorage.indexOfLot = $(".lot").index(this) - tablets.length;
                        }
                        else {
                            sessionStorage.indexOfLot = $(".lot").index(this);
                        }
                    }
                    else if ($(this).data("category") == 0 || $(this).data("category") == 1 || $(this).data("category") == 3 || $(this).data("category") == 2) {
                        sessionStorage.indexOfLot = $(".lot").index(this) + (page * pageSize);
                    }
                    sessionStorage.category = $(this).data("category");

                    window.location = "http://localhost:63342/direct-final-project/lot_template.html?_ijt=o4rlfeccbjh7tlod9j1p3sk9uj";
                });
            }

            else if (url == "http://localhost:63342/direct-final-project/searched.html?_ijt=lafkpofulatdngofmma0huvpku" && sessionStorage.subcat == 5) {
                var h2 = document.createElement("h2");
                h2.innerHTML = "Лоты";
                h2.className = "m";
                $(".lots").empty().append(h2);
                page = page - 1;

                DrawListOfLots(resultTabletsByPriceUp, 1 ,page, pageSize,1);
                $(".lot").click(function () {
                    if ($(this).data("category") == 11){
                        if ($(".lot").index(this) > tabletAccessories.length-1){
                            sessionStorage.indexOfLot = $(".lot").index(this) - tablets.length;
                        }
                        else {
                            sessionStorage.indexOfLot = $(".lot").index(this);
                        }
                    }
                    else if ($(this).data("category") == 0 || $(this).data("category") == 1 || $(this).data("category") == 3 || $(this).data("category") == 2) {
                        sessionStorage.indexOfLot = $(".lot").index(this) + (page * pageSize);
                    }
                    sessionStorage.category = $(this).data("category");

                    window.location = "http://localhost:63342/direct-final-project/lot_template.html?_ijt=o4rlfeccbjh7tlod9j1p3sk9uj";
                });
            }

            else if (url == "http://localhost:63342/direct-final-project/searched.html?_ijt=lafkpofulatdngofmma0huvpku" && sessionStorage.subcat == 6) {
                var h2 = document.createElement("h2");
                h2.innerHTML = "Лоты";
                h2.className = "m";
                $(".lots").empty().append(h2);
                page = page - 1;

                DrawListOfLots(resultPhonesByPriceUp, 0 ,page, pageSize,1);
                $(".lot").click(function () {
                    if ($(this).data("category") == 11){
                        if ($(".lot").index(this) > tabletAccessories.length-1){
                            sessionStorage.indexOfLot = $(".lot").index(this) - tablets.length;
                        }
                        else {
                            sessionStorage.indexOfLot = $(".lot").index(this);
                        }
                    }
                    else if ($(this).data("category") == 0 || $(this).data("category") == 1 || $(this).data("category") == 3 || $(this).data("category") == 2) {
                        sessionStorage.indexOfLot = $(".lot").index(this) + (page * pageSize);
                    }
                    sessionStorage.category = $(this).data("category");

                    window.location = "http://localhost:63342/direct-final-project/lot_template.html?_ijt=o4rlfeccbjh7tlod9j1p3sk9uj";
                });
            }

            else if (url == "http://localhost:63342/direct-final-project/searched.html?_ijt=lafkpofulatdngofmma0huvpku" && sessionStorage.subcat == 7) {
                var h2 = document.createElement("h2");
                h2.innerHTML = "Лоты";
                h2.className = "m";
                $(".lots").empty().append(h2);
                page = page - 1;

                DrawListOfLots(resultPhonesByPriceUp, 0 ,page, pageSize,1);
                $(".lot").click(function () {
                    if ($(this).data("category") == 11){
                        if ($(".lot").index(this) > tabletAccessories.length-1){
                            sessionStorage.indexOfLot = $(".lot").index(this) - tablets.length;
                        }
                        else {
                            sessionStorage.indexOfLot = $(".lot").index(this);
                        }
                    }
                    else if ($(this).data("category") == 0 || $(this).data("category") == 1 || $(this).data("category") == 3 || $(this).data("category") == 2) {
                        sessionStorage.indexOfLot = $(".lot").index(this) + (page * pageSize);
                    }

                    sessionStorage.category = $(this).data("category");

                    window.location = "http://localhost:63342/direct-final-project/lot_template.html?_ijt=o4rlfeccbjh7tlod9j1p3sk9uj";
                });
            }

            else if (url == "http://localhost:63342/direct-final-project/searched.html?_ijt=lafkpofulatdngofmma0huvpku" && sessionStorage.subcat == 8) {
                var h2 = document.createElement("h2");
                h2.innerHTML = "Лоты";
                h2.className = "m";
                $(".lots").empty().append(h2);
                page = page - 1;

                DrawListOfLots(resultHeadphonesByPriceUp, 2 ,page, pageSize,1);
                $(".lot").click(function () {
                    if ($(this).data("category") == 11){
                        if ($(".lot").index(this) > tabletAccessories.length-1){
                            sessionStorage.indexOfLot = $(".lot").index(this) - tablets.length;
                        }
                        else {
                            sessionStorage.indexOfLot = $(".lot").index(this);
                        }
                    }
                    else if ($(this).data("category") == 0 || $(this).data("category") == 1 || $(this).data("category") == 3 || $(this).data("category") == 2) {
                        sessionStorage.indexOfLot = $(".lot").index(this) + (page * pageSize);
                    }
                    sessionStorage.category = $(this).data("category");

                    window.location = "http://localhost:63342/direct-final-project/lot_template.html?_ijt=o4rlfeccbjh7tlod9j1p3sk9uj";
                });
            }

            else if (url == "http://localhost:63342/direct-final-project/searched.html?_ijt=lafkpofulatdngofmma0huvpku" && sessionStorage.subcat == 9) {
                var h2 = document.createElement("h2");
                h2.innerHTML = "Лоты";
                h2.className = "m";
                $(".lots").empty().append(h2);
                page = page - 1;

                DrawListOfLots(resultHeadphonesByPriceUp, 2 ,page, pageSize,1);
                $(".lot").click(function () {
                    if ($(this).data("category") == 11){
                        if ($(".lot").index(this) > tabletAccessories.length-1){
                            sessionStorage.indexOfLot = $(".lot").index(this) - tablets.length;
                        }
                        else {
                            sessionStorage.indexOfLot = $(".lot").index(this);
                        }
                    }
                    else if ($(this).data("category") == 0 || $(this).data("category") == 1 || $(this).data("category") == 3 || $(this).data("category") == 2) {
                        sessionStorage.indexOfLot = $(".lot").index(this) + (page * pageSize);
                    }
                    sessionStorage.category = $(this).data("category");

                    window.location = "http://localhost:63342/direct-final-project/lot_template.html?_ijt=o4rlfeccbjh7tlod9j1p3sk9uj";
                });
            }

            else if (url == "http://localhost:63342/direct-final-project/searched.html?_ijt=lafkpofulatdngofmma0huvpku" && sessionStorage.subcat == 10) {
                var h2 = document.createElement("h2");
                h2.innerHTML = "Лоты";
                h2.className = "m";
                $(".lots").empty().append(h2);
                page = page - 1;

                DrawListOfLots(foundItems, 2 ,page, pageSize,1);
                $(".lot").click(function () {
                    if ($(this).data("category") == 11){
                        if ($(".lot").index(this) > tabletAccessories.length-1){
                            sessionStorage.indexOfLot = $(".lot").index(this) - tablets.length;
                        }
                        else {
                            sessionStorage.indexOfLot = $(".lot").index(this);
                        }
                    }
                    else if ($(this).data("category") == 0 || $(this).data("category") == 1 || $(this).data("category") == 3 || $(this).data("category") == 2) {
                        sessionStorage.indexOfLot = $(".lot").index(this) + (page * pageSize);
                    }
                    sessionStorage.category = $(this).data("category");

                    window.location = "http://localhost:63342/direct-final-project/lot_template.html?_ijt=o4rlfeccbjh7tlod9j1p3sk9uj";
                });
            }

            else if (url == "http://localhost:63342/direct-final-project/searched.html?_ijt=lafkpofulatdngofmma0huvpku" && sessionStorage.subcat == 11) {
                var h2 = document.createElement("h2");
                h2.innerHTML = "Лоты";
                h2.className = "m";
                $(".lots").empty().append(h2);
                page = page - 1;

                foundItemsbyPriceUp = foundItemsUp.sort(SortByPrizeReverse);
                DrawListOfLots(foundItemsbyPriceUp, 2 ,page, pageSize,1);
                $(".lot").click(function () {
                    if ($(this).data("category") == 11){
                        if ($(".lot").index(this) > tabletAccessories.length-1){
                            sessionStorage.indexOfLot = $(".lot").index(this) - tablets.length;
                        }
                        else {
                            sessionStorage.indexOfLot = $(".lot").index(this);
                        }
                    }
                    else if ($(this).data("category") == 0 || $(this).data("category") == 1 || $(this).data("category") == 3 || $(this).data("category") == 2) {
                        sessionStorage.indexOfLot = $(".lot").index(this) + (page * pageSize);
                    }
                    sessionStorage.category = $(this).data("category");

                    window.location = "http://localhost:63342/direct-final-project/lot_template.html?_ijt=o4rlfeccbjh7tlod9j1p3sk9uj";
                });
            }
        }
    }

    function SortByPrize(a, b){
        var aPrize = a.prize;
        var bPrize = b.prize;
        return ((aPrize < bPrize) ? -1 : ((aPrize > bPrize) ? 1 : 0));
    }

    function SortByPrizeReverse(b, a){
        var aPrize = a.prize;
        var bPrize = b.prize;
        return ((aPrize < bPrize) ? -1 : ((aPrize > bPrize) ? 1 : 0));
    }

    function SearchForItems() {
        foundItems = [];
        foundItemsDown = [];
        foundItemsUp = [];

        var substring = sessionStorage.substr;
        for (var i = 0; i < telephone.length; i++){
            var n = telephone[i].name.indexOf(substring);
            if (n != -1){
                foundItems.push(telephone[i]);
            }
        }
        for (var j = 0; j < alltablets.length; j++){
            var k = alltablets[j].name.indexOf(substring);
            if (k != -1){
                foundItems.push(alltablets[j]);
            }
        }
        for (var q = 0; q < headphones.length; q++){
            var a = headphones[q].name.indexOf(substring);
            if (a != -1){
                foundItems.push(headphones[q]);
            }
        }

        foundItemsDown = foundItems;
        foundItemsUp = foundItems;

    }

    if (!Array.prototype.findIndex) {
        Object.defineProperty(Array.prototype, 'findIndex', {
            value: function(predicate) {
                if (this == null) {
                    throw new TypeError('"this" is null or not defined');
                }
                var o = Object(this);

                var len = o.length >>> 0;

                if (typeof predicate !== 'function') {
                    throw new TypeError('predicate must be a function');
                }

                var thisArg = arguments[1];

                var k = 0;

                while (k < len) {
                    var kValue = o[k];
                    if (predicate.call(thisArg, kValue, k, o)) {
                        return k;
                    }
                    k++;
                }
                return -1;
            }
        });
    }

    if (!Array.prototype.indexOf) {
        Array.prototype.indexOf = function(elt /*, from*/)
        {
            var len = this.length >>> 0;

            var from = Number(arguments[1]) || 0;
            from = (from < 0)
                ? Math.ceil(from)
                : Math.floor(from);
            if (from < 0)
                from += len;

            for (; from < len; from++)
            {
                if (from in this &&
                    this[from] === elt)
                    return from;
            }
            return -1;
        };
    }
///2210
});