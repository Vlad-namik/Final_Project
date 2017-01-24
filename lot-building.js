/**
 * Created by namik on 12.01.17.
 */
$(function () {
    console.log(sessionStorage.subcat);
    if (sessionStorage.category == 0 && sessionStorage.subcat == 6){//
        DrawLot(sessionStorage.category, sessionStorage.indexOfLot);
        document.title = resultPhonesByPriceDown[sessionStorage.indexOfLot].name;
    }

    else if (sessionStorage.category == 0 && sessionStorage.subcat == 7){
        DrawLot(sessionStorage.category, sessionStorage.indexOfLot);
        document.title = resultPhonesByPriceUp[sessionStorage.indexOfLot].name;
    }

    else if (sessionStorage.category == 0 && sessionStorage.subcat == 10){
        DrawLot(sessionStorage.category, sessionStorage.indexOfLot);
        document.title = foundItems[sessionStorage.indexOfLot].name;
    }

    else if (sessionStorage.category == 0 && sessionStorage.subcat == 11){
        foundItemsbyPriceUp = foundItemsUp.sort(SortByPrizeReverse);
        DrawLot(sessionStorage.category, sessionStorage.indexOfLot);
        document.title = foundItemsbyPriceUp[sessionStorage.indexOfLot].name;
    }

    else if (sessionStorage.category == 0 && sessionStorage.subcat == 12){//
        DrawLot(sessionStorage.category, sessionStorage.indexOfLot);
        document.title = foundItemsUp[sessionStorage.indexOfLot].name;
    }

    else if (sessionStorage.category == 0 && window.location.href == "http://localhost:63342/direct-final-project/lot_template.html?_ijt=o4rlfeccbjh7tlod9j1p3sk9uj"){
        document.title = telephone[sessionStorage.indexOfLot].name;
        DrawLot(sessionStorage.category, sessionStorage.indexOfLot);
    }

    else if (sessionStorage.category == 1 && sessionStorage.subcat == 4){
        DrawLot(sessionStorage.category, sessionStorage.indexOfLot);
        document.title = resultTabletsByPriceDown[sessionStorage.indexOfLot].name;
    }

    else if (sessionStorage.category == 1 && sessionStorage.subcat == 5){
        DrawLot(sessionStorage.category, sessionStorage.indexOfLot);
        document.title = resultTabletsByPriceUp[sessionStorage.indexOfLot].name;
    }

    else if (sessionStorage.category == 1 && window.location.href == "http://localhost:63342/direct-final-project/lot_template.html?_ijt=o4rlfeccbjh7tlod9j1p3sk9uj"){
        document.title = tablets[sessionStorage.indexOfLot].name;
        DrawLot(sessionStorage.category, sessionStorage.indexOfLot);
    }

    else if (sessionStorage.category == 1 && sessionStorage.subcat == 11){//
        foundItemsbyPriceUp = foundItemsUp.sort(SortByPrizeReverse);
        DrawLot(sessionStorage.category, sessionStorage.indexOfLot);
        document.title = foundItemsbyPriceUp[sessionStorage.indexOfLot].name;
    }

    else if (sessionStorage.category == 1 && sessionStorage.subcat == 12){//
        DrawLot(sessionStorage.category, sessionStorage.indexOfLot);
        document.title = foundItemsUp[sessionStorage.indexOfLot].name;
    }

    else if (sessionStorage.category == 2 && sessionStorage.subcat == 8){//
        DrawLot(sessionStorage.category, sessionStorage.indexOfLot);
        document.title = resultHeadphonesByPriceDown[sessionStorage.indexOfLot].name;
    }

    else if (sessionStorage.category == 2 && sessionStorage.subcat == 9){//
        DrawLot(sessionStorage.category, sessionStorage.indexOfLot);
        document.title = resultHeadphonesByPriceUp[sessionStorage.indexOfLot].name;
    }

    else if (sessionStorage.category == 2 && sessionStorage.subcat == 10){//
        DrawLot(sessionStorage.category, sessionStorage.indexOfLot);
        document.title = foundItems[sessionStorage.indexOfLot].name;
    }

    else if (sessionStorage.category == 2 && sessionStorage.subcat == 11){//
        foundItemsbyPriceUp = foundItemsUp.sort(SortByPrizeReverse);
        DrawLot(sessionStorage.category, sessionStorage.indexOfLot);
        document.title = foundItemsbyPriceUp[sessionStorage.indexOfLot].name;
    }

    else if (sessionStorage.category == 2 && sessionStorage.subcat == 12){//
        DrawLot(sessionStorage.category, sessionStorage.indexOfLot);
        document.title = foundItemsUp[sessionStorage.indexOfLot].name;
    }

    else if (sessionStorage.category == 2 && window.location.href == "http://localhost:63342/direct-final-project/lot_template.html?_ijt=o4rlfeccbjh7tlod9j1p3sk9uj"){
        document.title = headphones[sessionStorage.indexOfLot].name;
        DrawLot(sessionStorage.category, sessionStorage.indexOfLot);
    }

    else if (sessionStorage.category == 11){
        DrawLot(sessionStorage.category, sessionStorage.indexOfLot);
        document.title = tabletAccessories[sessionStorage.indexOfLot].name;
    }

    else if (sessionStorage.category == 3 && sessionStorage.subcat == 10){//
        DrawLot(sessionStorage.category, sessionStorage.indexOfLot);
        document.title = foundItems[sessionStorage.indexOfLot].name;
    }

    else if (sessionStorage.category == 3 && sessionStorage.subcat == 11){//
        foundItemsbyPriceUp = foundItemsUp.sort(SortByPrizeReverse);
        DrawLot(sessionStorage.category, sessionStorage.indexOfLot);
        document.title = foundItemsbyPriceUp[sessionStorage.indexOfLot].name;
    }

    else if (sessionStorage.category == 3 && sessionStorage.subcat == 12){//
        DrawLot(sessionStorage.category, sessionStorage.indexOfLot);
        document.title = foundItemsUp[sessionStorage.indexOfLot].name;
    }

    else if (sessionStorage.category == 3 && sessionStorage.subcat == 2){//
        DrawLot(sessionStorage.category, sessionStorage.indexOfLot);
        document.title = result[sessionStorage.indexOfLot].name;
    }

    else if (sessionStorage.category == 3 && sessionStorage.subcat == 3){//
        DrawLot(sessionStorage.category, sessionStorage.indexOfLot);
        document.title = resultByPriceUp[sessionStorage.indexOfLot].name;
    }

    else if (sessionStorage.category == 3 && window.location.href == "http://localhost:63342/direct-final-project/lot_template.html?_ijt=o4rlfeccbjh7tlod9j1p3sk9uj"){//
        DrawLot(sessionStorage.category, sessionStorage.indexOfLot);
        document.title = alltablets[sessionStorage.indexOfLot].name;
    }

    $(".sliders").click(function(){ //slider для фото лота
        $(".main-image").attr("src" , $(this).attr("src"));
        console.log($(this).attr("src"));
    });

    function DrawLot(category, indexx) {
        var div = document.createElement("div");
        div.className = "lot-main";
        var div1 = document.createElement("div");
        div1.className = "content-header";
        var div2 = document.createElement("div");
        div2.className = "lot-left-block";
        var div3 = document.createElement("div");
        div3.className = "lot-right-block";
        var div4 = document.createElement("div");
        div4.className = "lot-left-block-image";
        var div5 = document.createElement("div");
        div5.className = "lot-left-block-images";
        var div6 = document.createElement("div");
        div6.className = "lot-left-block-images-list";
        var div7 = document.createElement("div");
        div7.className = "lot-left-block-images-list";
        var div8 = document.createElement("div");
        div8.className = "lot-left-block-images-list";
        var image = document.createElement("img");
        var image1 = document.createElement("img");
        var image2 = document.createElement("img");
        var image3 = document.createElement("img");

        var lotName = document.createElement("h2");
        lotName.className = "lot-main-name";
        var lotPrize = document.createElement("h4");
        lotPrize.className = "lot-main-prize";
        var lotTelephone = document.createElement("h4");
        lotTelephone.className = "lot-main-telephone properties";
        var lotBet = document.createElement("h4");
        lotBet.className = "lot-main-bet properties";
        var lotCity = document.createElement("h4");
        lotCity.className = "lot-main-city properties";
        var lotShip = document.createElement("h4");
        lotShip.className = "lot-main-shipment properties";
        var lotState = document.createElement("h4");
        lotState.className = "lot-main-state properties";
        var rule = document.createElement("h5");
        rule.className = "rule";
        rule.innerHTML = "Чтобы купить лот, введите свой телефон и ставку ";
        var inputPhone = document.createElement("input");
        inputPhone.setAttribute("type" , "text");
        inputPhone.className = "register-phone";
        inputPhone.setAttribute("placeholder" , "Телефон(not)");
        var inputCash = document.createElement("input");
        inputCash.setAttribute("type" , "text");
        inputCash.setAttribute("placeholder" , "Ваша ставка");
        inputCash.className = "register-cash";
        var inputButton = document.createElement("input");
        inputButton.setAttribute("type" , "button");
        inputButton.setAttribute("value" , "Cтавка!");
        inputButton.className = "submit";

        var description = document.createElement("div");
        description.className = "lot-description";
        var text = document.createElement("h4");
        var description1 = document.createElement("p");
        text.innerHTML = "DESCRIPTION";
        description1.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";
        description1.className = "description1";
        text.className = "description";
        description.appendChild(text);
        description.appendChild(description1);

        if (category == 0 && sessionStorage.subcat == 6) {
            console.log("I am here");
            console.log(result);
            image.src = resultPhonesByPriceDown[indexx].image[0];
            image.className = "images main-image";
            image1.src = resultPhonesByPriceDown[indexx].image[1];
            image1.className = "images sliders";
            image2.src = resultPhonesByPriceDown[indexx].image[2];
            image2.className = "images sliders";
            image3.src = resultPhonesByPriceDown[indexx].image[0];
            image3.className = "images sliders";

            lotName.innerHTML = resultPhonesByPriceDown[indexx].name;
            lotPrize.innerHTML = resultPhonesByPriceDown[indexx].prize + " UAH";
            if (localStorage.getItem(resultPhonesByPriceDown[indexx].name) === null){
                lotBet.innerHTML = "Последняя ставка в размере 0 грн";
            }
            else if(localStorage.getItem(resultPhonesByPriceDown[indexx].name) !== null) {
                lotBet.innerHTML = "Последняя ставка в размере " + localStorage.getItem(resultPhonesByPriceDown[indexx].name) + " грн";
            }
            lotCity.innerHTML = "Местоположение: г." + resultPhonesByPriceDown[indexx].region.toUpperCase();
            lotShip.innerHTML = "Доставка будет стоить: " + resultPhonesByPriceDown[indexx].shipment + " грн.";
            lotState.innerHTML = "Состояние: " + resultPhonesByPriceDown[indexx].state;
        }

        else if (category == 0 && sessionStorage.subcat == 7) {
            console.log("I am here");
            image.src = resultPhonesByPriceUp[indexx].image[0];
            image.className = "images main-image";
            image1.src = resultPhonesByPriceUp[indexx].image[1];
            image1.className = "images sliders";
            image2.src = resultPhonesByPriceUp[indexx].image[2];
            image2.className = "images sliders";
            image3.src = resultPhonesByPriceUp[indexx].image[0];
            image3.className = "images sliders";

            lotName.innerHTML = resultPhonesByPriceUp[indexx].name;
            lotPrize.innerHTML = resultPhonesByPriceUp[indexx].prize + " UAH";
            if (localStorage.getItem(resultPhonesByPriceUp[indexx].name) === null){
                lotBet.innerHTML = "Последняя ставка в размере 0 грн";
            }
            else if(localStorage.getItem(resultPhonesByPriceUp[indexx].name) !== null) {
                lotBet.innerHTML = "Последняя ставка в размере " + localStorage.getItem(resultPhonesByPriceUp[indexx].name) + " грн";
            }
            lotCity.innerHTML = "Местоположение: г." + resultPhonesByPriceUp[indexx].region.toUpperCase();
            lotShip.innerHTML = "Доставка будет стоить: " + resultPhonesByPriceUp[indexx].shipment + " грн.";
            lotState.innerHTML = "Состояние: " + resultPhonesByPriceUp[indexx].state;
        }

        else if (category == 0 && sessionStorage.subcat == 10) {
            console.log("I am here");
            image.src = foundItems[indexx].image[0];
            image.className = "images main-image";
            image1.src = foundItems[indexx].image[1];
            image1.className = "images sliders";
            image2.src = foundItems[indexx].image[2];
            image2.className = "images sliders";
            image3.src = foundItems[indexx].image[0];
            image3.className = "images sliders";

            lotName.innerHTML = foundItems[indexx].name;
            lotPrize.innerHTML = foundItems[indexx].prize + " UAH";

            if (localStorage.getItem(foundItems[indexx].name) === null){
                lotBet.innerHTML = "Последняя ставка в размере 0 грн";
            }
            else if(localStorage.getItem(foundItems[indexx].name) !== null) {
                lotBet.innerHTML = "Последняя ставка в размере " + localStorage.getItem(foundItems[indexx].name) + " грн";
            }
            lotCity.innerHTML = "Местоположение: г." + foundItems[indexx].region.toUpperCase();
            lotShip.innerHTML = "Доставка будет стоить: " + foundItems[indexx].shipment + " грн.";
            lotState.innerHTML = "Состояние: " + foundItems[indexx].state;
        }

        else if (category == 0 && sessionStorage.subcat == 11) {
            console.log("I am here");
            foundItemsbyPriceUp = foundItemsUp.sort(SortByPrizeReverse);
            console.log(foundItemsbyPriceUp);
            image.src = foundItemsbyPriceUp[indexx].image[0];
            image.className = "images main-image";
            image1.src = foundItemsbyPriceUp[indexx].image[1];
            image1.className = "images sliders";
            image2.src = foundItemsbyPriceUp[indexx].image[2];
            image2.className = "images sliders";
            image3.src = foundItemsbyPriceUp[indexx].image[0];
            image3.className = "images sliders";

            lotName.innerHTML = foundItemsbyPriceUp[indexx].name;
            lotPrize.innerHTML = foundItemsbyPriceUp[indexx].prize + " UAH";

            if (localStorage.getItem(foundItemsbyPriceUp[indexx].name) === null){
                lotBet.innerHTML = "Последняя ставка в размере 0 грн";
            }
            else if(localStorage.getItem(foundItemsbyPriceUp[indexx].name) !== null) {
                lotBet.innerHTML = "Последняя ставка в размере " + localStorage.getItem(foundItemsbyPriceUp[indexx].name) + " грн";
            }
            lotCity.innerHTML = "Местоположение: г." + foundItemsbyPriceUp[indexx].region.toUpperCase();
            lotShip.innerHTML = "Доставка будет стоить: " + foundItemsbyPriceUp[indexx].shipment + " грн.";
            lotState.innerHTML = "Состояние: " + foundItemsbyPriceUp[indexx].state;
        }

        else if (category == 0 && sessionStorage.subcat == 12) {
            console.log("I am here");
            console.log(foundItemsUp);
            image.src = foundItemsUp[indexx].image[0];
            image.className = "images main-image";
            image1.src = foundItemsUp[indexx].image[1];
            image1.className = "images sliders";
            image2.src = foundItemsUp[indexx].image[2];
            image2.className = "images sliders";
            image3.src = foundItemsUp[indexx].image[0];
            image3.className = "images sliders";

            lotName.innerHTML = foundItemsUp[indexx].name;
            lotPrize.innerHTML = foundItemsUp[indexx].prize + " UAH";

            if (localStorage.getItem(foundItemsUp[indexx].name) === null){
                lotBet.innerHTML = "Последняя ставка в размере 0 грн";
            }
            else if(localStorage.getItem(foundItemsUp[indexx].name) !== null) {
                lotBet.innerHTML = "Последняя ставка в размере " + localStorage.getItem(foundItemsUp[indexx].name) + " грн";
            }
            lotCity.innerHTML = "Местоположение: г." + foundItemsUp[indexx].region.toUpperCase();
            lotShip.innerHTML = "Доставка будет стоить: " + foundItemsUp[indexx].shipment + " грн.";
            lotState.innerHTML = "Состояние: " + foundItemsUp[indexx].state;
        }

        else if (category == 0) {
            console.log("Hi");
            image.src = telephone[indexx].image[0];
            image.className = "images main-image";
            image1.src = telephone[indexx].image[1];
            image1.className = "images sliders";
            image2.src = telephone[indexx].image[2];
            image2.className = "images sliders";
            image3.src = telephone[indexx].image[0];
            image3.className = "images sliders";

            lotName.innerHTML = telephone[indexx].name;
            lotPrize.innerHTML = telephone[indexx].prize + " UAH";

            if (localStorage.getItem(telephone[indexx].name) === null){
                lotBet.innerHTML = "Последняя ставка в размере 0 грн";
            }
            else if(localStorage.getItem(telephone[indexx].name) !== null) {
                lotBet.innerHTML = "Последняя ставка в размере " + localStorage.getItem(telephone[indexx].name) + " грн";
            }

            lotCity.innerHTML = "Местоположение: г." + telephone[indexx].region.toUpperCase();
            lotShip.innerHTML = "Доставка будет стоить: " + telephone[indexx].shipment + " грн.";
            lotState.innerHTML = "Состояние: " + telephone[indexx].state;
        }

        else if (category == 1 && sessionStorage.subcat == 4) {
            console.log("I am here");
            image.src = resultTabletsByPriceDown[indexx].image[0];
            image.className = "images main-image";
            image1.src = resultTabletsByPriceDown[indexx].image[1];
            image1.className = "images sliders";
            image2.src = resultTabletsByPriceDown[indexx].image[2];
            image2.className = "images sliders";
            image3.src = resultTabletsByPriceDown[indexx].image[0];
            image3.className = "images sliders";

            lotName.innerHTML = resultTabletsByPriceDown[indexx].name;
            lotPrize.innerHTML = resultTabletsByPriceDown[indexx].prize + " UAH";
            if (localStorage.getItem(resultTabletsByPriceDown[indexx].name) === null){
                lotBet.innerHTML = "Последняя ставка в размере 0 грн";
            }
            else if(localStorage.getItem(resultTabletsByPriceDown[indexx].name) !== null) {
                lotBet.innerHTML = "Последняя ставка в размере " + localStorage.getItem(resultTabletsByPriceDown[indexx].name) + " грн";
            }
            lotCity.innerHTML = "Местоположение: г." + resultTabletsByPriceDown[indexx].region.toUpperCase();
            lotShip.innerHTML = "Доставка будет стоить: " + resultTabletsByPriceDown[indexx].shipment + " грн.";
            lotState.innerHTML = "Состояние: " + resultTabletsByPriceDown[indexx].state;
        }

        else if (category == 1 && sessionStorage.subcat == 5) {
            console.log("I am here");
            image.src = resultTabletsByPriceUp[indexx].image[0];
            image.className = "images main-image";
            image1.src = resultTabletsByPriceUp[indexx].image[1];
            image1.className = "images sliders";
            image2.src = resultTabletsByPriceUp[indexx].image[2];
            image2.className = "images sliders";
            image3.src = resultTabletsByPriceUp[indexx].image[0];
            image3.className = "images sliders";

            lotName.innerHTML = resultTabletsByPriceUp[indexx].name;
            lotPrize.innerHTML = resultTabletsByPriceUp[indexx].prize + " UAH";
            if (localStorage.getItem(resultTabletsByPriceUp[indexx].name) === null){
                lotBet.innerHTML = "Последняя ставка в размере 0 грн";
            }
            else if(localStorage.getItem(resultTabletsByPriceUp[indexx].name) !== null) {
                lotBet.innerHTML = "Последняя ставка в размере " + localStorage.getItem(resultTabletsByPriceUp[indexx].name) + " грн";
            }
            lotCity.innerHTML = "Местоположение: г." + resultTabletsByPriceUp[indexx].region.toUpperCase();
            lotShip.innerHTML = "Доставка будет стоить: " + resultTabletsByPriceUp[indexx].shipment + " грн.";
            lotState.innerHTML = "Состояние: " + resultTabletsByPriceUp[indexx].state;
        }

        else if (category == 1 && sessionStorage.subcat == 11) {
            console.log("I am here");
            foundItemsbyPriceUp = foundItemsUp.sort(SortByPrizeReverse);
            console.log(foundItemsbyPriceUp);
            image.src = foundItemsbyPriceUp[indexx].image[0];
            image.className = "images main-image";
            image1.src = foundItemsbyPriceUp[indexx].image[1];
            image1.className = "images sliders";
            image2.src = foundItemsbyPriceUp[indexx].image[2];
            image2.className = "images sliders";
            image3.src = foundItemsbyPriceUp[indexx].image[0];
            image3.className = "images sliders";

            lotName.innerHTML = foundItemsbyPriceUp[indexx].name;
            lotPrize.innerHTML = foundItemsbyPriceUp[indexx].prize + " UAH";

            if (localStorage.getItem(foundItemsbyPriceUp[indexx].name) === null){
                lotBet.innerHTML = "Последняя ставка в размере 0 грн";
            }
            else if(localStorage.getItem(foundItemsbyPriceUp[indexx].name) !== null) {
                lotBet.innerHTML = "Последняя ставка в размере " + localStorage.getItem(foundItemsbyPriceUp[indexx].name) + " грн";
            }
            lotCity.innerHTML = "Местоположение: г." + foundItemsbyPriceUp[indexx].region.toUpperCase();
            lotShip.innerHTML = "Доставка будет стоить: " + foundItemsbyPriceUp[indexx].shipment + " грн.";
            lotState.innerHTML = "Состояние: " + foundItemsbyPriceUp[indexx].state;
        }

        else if (category == 1 && sessionStorage.subcat == 12) {
            console.log("I am here");
            console.log(foundItemsUp);
            image.src = foundItemsUp[indexx].image[0];
            image.className = "images main-image";
            image1.src = foundItemsUp[indexx].image[1];
            image1.className = "images sliders";
            image2.src = foundItemsUp[indexx].image[2];
            image2.className = "images sliders";
            image3.src = foundItemsUp[indexx].image[0];
            image3.className = "images sliders";

            lotName.innerHTML = foundItemsUp[indexx].name;
            lotPrize.innerHTML = foundItemsUp[indexx].prize + " UAH";
            if (localStorage.getItem(foundItemsUp[indexx].name) === null){
                lotBet.innerHTML = "Последняя ставка в размере 0 грн";
            }
            else if(localStorage.getItem(foundItemsUp[indexx].name) !== null) {
                lotBet.innerHTML = "Последняя ставка в размере " + localStorage.getItem(foundItemsUp[indexx].name) + " грн";
            }
            lotCity.innerHTML = "Местоположение: г." + foundItemsUp[indexx].region.toUpperCase();
            lotShip.innerHTML = "Доставка будет стоить: " + foundItemsUp[indexx].shipment + " грн.";
            lotState.innerHTML = "Состояние: " + foundItemsUp[indexx].state;
        }

        else if (category == 1) {
            image.src = tablets[indexx].image[0];
            image.className = "images main-image";
            image1.src = tablets[indexx].image[1];
            image1.className = "images sliders";
            image2.src = tablets[indexx].image[2];
            image2.className = "images sliders";
            image3.src = tablets[indexx].image[0];
            image3.className = "images sliders";

            lotName.innerHTML = tablets[indexx].name;
            lotPrize.innerHTML = tablets[indexx].prize + " UAH";
            if (localStorage.getItem(tablets[indexx].name) === null){
                lotBet.innerHTML = "Последняя ставка в размере 0 грн";
            }
            else if(localStorage.getItem(tablets[indexx].name) !== null) {
                lotBet.innerHTML = "Последняя ставка в размере " + localStorage.getItem(tablets[indexx].name) + " грн";
            }
            lotCity.innerHTML = "Местоположение: г." + tablets[indexx].region.toUpperCase();
            lotShip.innerHTML = "Доставка будет стоить: " + tablets[indexx].shipment + " грн.";
            lotState.innerHTML = "Состояние: " + tablets[indexx].state;
        }

        else if (category == 2 && sessionStorage.subcat == 8) {
            console.log("I am here");
            image.src = resultHeadphonesByPriceDown[indexx].image[0];
            image.className = "images main-image";
            image1.src = resultHeadphonesByPriceDown[indexx].image[1];
            image1.className = "images sliders";
            image2.src = resultHeadphonesByPriceDown[indexx].image[2];
            image2.className = "images sliders";
            image3.src = resultHeadphonesByPriceDown[indexx].image[0];
            image3.className = "images sliders";

            lotName.innerHTML = resultHeadphonesByPriceDown[indexx].name;
            lotPrize.innerHTML = resultHeadphonesByPriceDown[indexx].prize + " UAH";
            if (localStorage.getItem(resultHeadphonesByPriceDown[indexx].name) === null){
                lotBet.innerHTML = "Последняя ставка в размере 0 грн";
            }
            else if(localStorage.getItem(resultHeadphonesByPriceDown[indexx].name) !== null) {
                lotBet.innerHTML = "Последняя ставка в размере " + localStorage.getItem(resultHeadphonesByPriceDown[indexx].name) + " грн";
            }
            lotCity.innerHTML = "Местоположение: г." + resultHeadphonesByPriceDown[indexx].region.toUpperCase();
            lotShip.innerHTML = "Доставка будет стоить: " + resultHeadphonesByPriceDown[indexx].shipment + " грн.";
            lotState.innerHTML = "Состояние: " + resultHeadphonesByPriceDown[indexx].state;
        }

        else if (category == 2 && sessionStorage.subcat == 9) {
            console.log("I am here");
            image.src = resultHeadphonesByPriceUp[indexx].image[0];
            image.className = "images main-image";
            image1.src = resultHeadphonesByPriceUp[indexx].image[1];
            image1.className = "images sliders";
            image2.src = resultHeadphonesByPriceUp[indexx].image[2];
            image2.className = "images sliders";
            image3.src = resultHeadphonesByPriceUp[indexx].image[0];
            image3.className = "images sliders";

            lotName.innerHTML = resultHeadphonesByPriceUp[indexx].name;
            lotPrize.innerHTML = resultHeadphonesByPriceUp[indexx].prize + " UAH";
            if (localStorage.getItem(resultHeadphonesByPriceUp[indexx].name) === null){
                lotBet.innerHTML = "Последняя ставка в размере 0 грн";
            }
            else if(localStorage.getItem(resultHeadphonesByPriceUp[indexx].name) !== null) {
                lotBet.innerHTML = "Последняя ставка в размере " + localStorage.getItem(resultHeadphonesByPriceUp[indexx].name) + " грн";
            }
            lotCity.innerHTML = "Местоположение: г." + resultHeadphonesByPriceUp[indexx].region.toUpperCase();
            lotShip.innerHTML = "Доставка будет стоить: " + resultHeadphonesByPriceUp[indexx].shipment + " грн.";
            lotState.innerHTML = "Состояние: " + resultHeadphonesByPriceUp[indexx].state;
        }

        else if (category == 2 && sessionStorage.subcat == 10) {
            console.log("I am here");
            image.src = foundItems[indexx].image[0];
            image.className = "images main-image";
            image1.src = foundItems[indexx].image[1];
            image1.className = "images sliders";
            image2.src = foundItems[indexx].image[2];
            image2.className = "images sliders";
            image3.src = foundItems[indexx].image[0];
            image3.className = "images sliders";

            lotName.innerHTML = foundItems[indexx].name;
            lotPrize.innerHTML = foundItems[indexx].prize + " UAH";
            if (localStorage.getItem(foundItems[indexx].name) === null){
                lotBet.innerHTML = "Последняя ставка в размере 0 грн";
            }
            else if(localStorage.getItem(foundItems[indexx].name) !== null) {
                lotBet.innerHTML = "Последняя ставка в размере " + localStorage.getItem(foundItems[indexx].name) + " грн";
            }
            lotCity.innerHTML = "Местоположение: г." + foundItems[indexx].region.toUpperCase();
            lotShip.innerHTML = "Доставка будет стоить: " + foundItems[indexx].shipment + " грн.";
            lotState.innerHTML = "Состояние: " + foundItems[indexx].state;
        }

        else if (category == 2 && sessionStorage.subcat == 11) {
            console.log("I am here");
            foundItemsbyPriceUp = foundItemsUp.sort(SortByPrizeReverse);
            console.log(foundItemsbyPriceUp);
            image.src = foundItemsbyPriceUp[indexx].image[0];
            image.className = "images main-image";
            image1.src = foundItemsbyPriceUp[indexx].image[1];
            image1.className = "images sliders";
            image2.src = foundItemsbyPriceUp[indexx].image[2];
            image2.className = "images sliders";
            image3.src = foundItemsbyPriceUp[indexx].image[0];
            image3.className = "images sliders";

            lotName.innerHTML = foundItemsbyPriceUp[indexx].name;
            lotPrize.innerHTML = foundItemsbyPriceUp[indexx].prize + " UAH";
            if (localStorage.getItem(foundItemsbyPriceUp[indexx].name) === null){
                lotBet.innerHTML = "Последняя ставка в размере 0 грн";
            }
            else if(localStorage.getItem(foundItemsbyPriceUp[indexx].name) !== null) {
                lotBet.innerHTML = "Последняя ставка в размере " + localStorage.getItem(foundItemsbyPriceUp[indexx].name) + " грн";
            }
            lotCity.innerHTML = "Местоположение: г." + foundItemsbyPriceUp[indexx].region.toUpperCase();
            lotShip.innerHTML = "Доставка будет стоить: " + foundItemsbyPriceUp[indexx].shipment + " грн.";
            lotState.innerHTML = "Состояние: " + foundItemsbyPriceUp[indexx].state;
        }

        else if (category == 2 && sessionStorage.subcat == 12) {
            console.log("I am here");
            console.log(foundItemsUp);
            image.src = foundItemsUp[indexx].image[0];
            image.className = "images main-image";
            image1.src = foundItemsUp[indexx].image[1];
            image1.className = "images sliders";
            image2.src = foundItemsUp[indexx].image[2];
            image2.className = "images sliders";
            image3.src = foundItemsUp[indexx].image[0];
            image3.className = "images sliders";

            lotName.innerHTML = foundItemsUp[indexx].name;
            lotPrize.innerHTML = foundItemsUp[indexx].prize + " UAH";
            if (localStorage.getItem(foundItemsUp[indexx].name) === null){
                lotBet.innerHTML = "Последняя ставка в размере 0 грн";
            }
            else if(localStorage.getItem(foundItemsUp[indexx].name) !== null) {
                lotBet.innerHTML = "Последняя ставка в размере " + localStorage.getItem(foundItemsUp[indexx].name) + " грн";
            }
            lotCity.innerHTML = "Местоположение: г." + foundItemsUp[indexx].region.toUpperCase();
            lotShip.innerHTML = "Доставка будет стоить: " + foundItemsUp[indexx].shipment + " грн.";
            lotState.innerHTML = "Состояние: " + foundItemsUp[indexx].state;
        }

        else if (category == 2){
            image.src = headphones[indexx].image[0];
            image.className = "images main-image";
            image1.src = headphones[indexx].image[1];
            image1.className = "images sliders";
            image2.src = headphones[indexx].image[2];
            image2.className = "images sliders";
            image3.src = headphones[indexx].image[0];
            image3.className = "images sliders";

            lotName.innerHTML = headphones[indexx].name;
            lotPrize.innerHTML = headphones[indexx].prize + " UAH";
            if (localStorage.getItem(headphones[indexx].name) === null){
                lotBet.innerHTML = "Последняя ставка в размере 0 грн";
            }
            else if(localStorage.getItem(headphones[indexx].name) !== null) {
                lotBet.innerHTML = "Последняя ставка в размере " + localStorage.getItem(headphones[indexx].name) + " грн";
            }
            lotCity.innerHTML = "Местоположение: г." + headphones[indexx].region.toUpperCase();
            lotShip.innerHTML = "Доставка будет стоить: " + headphones[indexx].shipment + " грн.";
            lotState.innerHTML = "Состояние: " + headphones[indexx].state;
        }

        else if (category == 3 && sessionStorage.subcat == 10) {
            console.log("I am here");
            image.src = foundItems[indexx].image[0];
            image.className = "images main-image";
            image1.src = foundItems[indexx].image[1];
            image1.className = "images sliders";
            image2.src = foundItems[indexx].image[2];
            image2.className = "images sliders";
            image3.src = foundItems[indexx].image[0];
            image3.className = "images sliders";

            lotName.innerHTML = foundItems[indexx].name;
            lotPrize.innerHTML = foundItems[indexx].prize + " UAH";
            if (localStorage.getItem(foundItems[indexx].name) === null){
                lotBet.innerHTML = "Последняя ставка в размере 0 грн";
            }
            else if(localStorage.getItem(foundItems[indexx].name) !== null) {
                lotBet.innerHTML = "Последняя ставка в размере " + localStorage.getItem(foundItems[indexx].name) + " грн";
            }
            lotCity.innerHTML = "Местоположение: г." + foundItems[indexx].region.toUpperCase();
            lotShip.innerHTML = "Доставка будет стоить: " + foundItems[indexx].shipment + " грн.";
            lotState.innerHTML = "Состояние: " + foundItems[indexx].state;
        }

        else if (category == 3 && sessionStorage.subcat == 11) {
            console.log("I am here");
            foundItemsbyPriceUp = foundItemsUp.sort(SortByPrizeReverse);
            console.log(foundItemsbyPriceUp);
            image.src = foundItemsbyPriceUp[indexx].image[0];
            image.className = "images main-image";
            image1.src = foundItemsbyPriceUp[indexx].image[1];
            image1.className = "images sliders";
            image2.src = foundItemsbyPriceUp[indexx].image[2];
            image2.className = "images sliders";
            image3.src = foundItemsbyPriceUp[indexx].image[0];
            image3.className = "images sliders";

            lotName.innerHTML = foundItemsbyPriceUp[indexx].name;
            lotPrize.innerHTML = foundItemsbyPriceUp[indexx].prize + " UAH";
            if (localStorage.getItem(foundItemsbyPriceUp[indexx].name) === null){
                lotBet.innerHTML = "Последняя ставка в размере 0 грн";
            }
            else if(localStorage.getItem(foundItemsbyPriceUp[indexx].name) !== null) {
                lotBet.innerHTML = "Последняя ставка в размере " + localStorage.getItem(foundItemsbyPriceUp[indexx].name) + " грн";
            }
            lotCity.innerHTML = "Местоположение: г." + foundItemsbyPriceUp[indexx].region.toUpperCase();
            lotShip.innerHTML = "Доставка будет стоить: " + foundItemsbyPriceUp[indexx].shipment + " грн.";
            lotState.innerHTML = "Состояние: " + foundItemsbyPriceUp[indexx].state;
        }

        else if (category == 3 && sessionStorage.subcat == 12) {
            console.log("I am here");
            console.log(foundItemsUp);
            image.src = foundItemsUp[indexx].image[0];
            image.className = "images main-image";
            image1.src = foundItemsUp[indexx].image[1];
            image1.className = "images sliders";
            image2.src = foundItemsUp[indexx].image[2];
            image2.className = "images sliders";
            image3.src = foundItemsUp[indexx].image[0];
            image3.className = "images sliders";

            lotName.innerHTML = foundItemsUp[indexx].name;
            lotPrize.innerHTML = foundItemsUp[indexx].prize + " UAH";
            if (localStorage.getItem(foundItemsUp[indexx].name) === null){
                lotBet.innerHTML = "Последняя ставка в размере 0 грн";
            }
            else if(localStorage.getItem(foundItemsUp[indexx].name) !== null) {
                lotBet.innerHTML = "Последняя ставка в размере " + localStorage.getItem(foundItemsUp[indexx].name) + " грн";
            }
            lotCity.innerHTML = "Местоположение: г." + foundItemsUp[indexx].region.toUpperCase();
            lotShip.innerHTML = "Доставка будет стоить: " + foundItemsUp[indexx].shipment + " грн.";
            lotState.innerHTML = "Состояние: " + foundItemsUp[indexx].state;
        }

        else if (category == 3 && sessionStorage.subcat == 2) {
            console.log("I am here");
            image.src = result[indexx].image[0];
            image.className = "images main-image";
            image1.src = result[indexx].image[1];
            image1.className = "images sliders";
            image2.src = result[indexx].image[2];
            image2.className = "images sliders";
            image3.src = result[indexx].image[0];
            image3.className = "images sliders";

            lotName.innerHTML = result[indexx].name;
            lotPrize.innerHTML = result[indexx].prize + " UAH";
            if (localStorage.getItem(result[indexx].name) === null){
                lotBet.innerHTML = "Последняя ставка в размере 0 грн";
            }
            else if(localStorage.getItem(result[indexx].name) !== null) {
                lotBet.innerHTML = "Последняя ставка в размере " + localStorage.getItem(result[indexx].name) + " грн";
            }
            lotCity.innerHTML = "Местоположение: г." + result[indexx].region.toUpperCase();
            lotShip.innerHTML = "Доставка будет стоить: " + result[indexx].shipment + " грн.";
            lotState.innerHTML = "Состояние: " + result[indexx].state;
        }

        else if (category == 3 && sessionStorage.subcat == 3) {
            console.log("I am here");
            console.log(resultByPriceUp);
            image.src = resultByPriceUp[indexx].image[0];
            image.className = "images main-image";
            image1.src = resultByPriceUp[indexx].image[1];
            image1.className = "images sliders";
            image2.src = resultByPriceUp[indexx].image[2];
            image2.className = "images sliders";
            image3.src = resultByPriceUp[indexx].image[0];
            image3.className = "images sliders";

            lotName.innerHTML = resultByPriceUp[indexx].name;
            lotPrize.innerHTML = resultByPriceUp[indexx].prize + " UAH";
            if (localStorage.getItem(resultByPriceUp[indexx].name) === null){
                lotBet.innerHTML = "Последняя ставка в размере 0 грн";
            }
            else if(localStorage.getItem(resultByPriceUp[indexx].name) !== null) {
                lotBet.innerHTML = "Последняя ставка в размере " + localStorage.getItem(resultByPriceUp[indexx].name) + " грн";
            }
            lotCity.innerHTML = "Местоположение: г." + resultByPriceUp[indexx].region.toUpperCase();
            lotShip.innerHTML = "Доставка будет стоить: " + resultByPriceUp[indexx].shipment + " грн.";
            lotState.innerHTML = "Состояние: " + resultByPriceUp[indexx].state;
        }

        else if (category == 3 ) {
            image.src = alltablets[indexx].image[0];
            image.className = "images main-image";
            image1.src = alltablets[indexx].image[1];
            image1.className = "images sliders";
            image2.src = alltablets[indexx].image[2];
            image2.className = "images sliders";
            image3.src = alltablets[indexx].image[0];
            image3.className = "images sliders";

            lotName.innerHTML = alltablets[indexx].name;
            lotPrize.innerHTML = alltablets[indexx].prize + " UAH";
            if (localStorage.getItem(alltablets[indexx].name) === null){
                lotBet.innerHTML = "Последняя ставка в размере 0 грн";
            }
            else if(localStorage.getItem(alltablets[indexx].name) !== null) {
                lotBet.innerHTML = "Последняя ставка в размере " + localStorage.getItem(alltablets[indexx].name) + " грн";
            }
            lotCity.innerHTML = "Местоположение: г." + alltablets[indexx].region.toUpperCase();
            lotShip.innerHTML = "Доставка будет стоить: " + alltablets[indexx].shipment + " грн.";
            lotState.innerHTML = "Состояние: " + alltablets[indexx].state;
        }

        else if(category == 11){
            image.src = tabletAccessories[indexx].image[0];
            image.className = "images main-image";
            image1.src = tabletAccessories[indexx].image[1];
            image1.className = "images sliders";
            image2.src = tabletAccessories[indexx].image[2];
            image2.className = "images sliders";
            image3.src = tabletAccessories[indexx].image[0];
            image3.className = "images sliders";

            lotName.innerHTML = tabletAccessories[indexx].name;
            lotPrize.innerHTML = tabletAccessories[indexx].prize + " UAH";
            if (localStorage.getItem(tabletAccessories[indexx].name) === null){
                lotBet.innerHTML = "Последняя ставка в размере 0 грн";
            }
            else if(localStorage.getItem(tabletAccessories[indexx].name) !== null) {
                lotBet.innerHTML = "Последняя ставка в размере " + localStorage.getItem(tabletAccessories[indexx].name) + " грн";
            }
            lotCity.innerHTML = "Местоположение: г." + tabletAccessories[indexx].region.toUpperCase();
            lotShip.innerHTML = "Доставка будет стоить: " + tabletAccessories[indexx].shipment + " грн.";
            lotState.innerHTML = "Состояние: " + tabletAccessories[indexx].state;
        }

        var breadcrumbs = document.createElement("p");
        breadcrumbs.innerHTML = "BREADCRUMBS";

        div8.appendChild(image3);div7.appendChild(image2);div6.appendChild(image1);div5.appendChild(div8);div5.appendChild(div7);div5.appendChild(div6);
        div4.appendChild(image);
        div2.appendChild(div4);div2.appendChild(div5);
        div3.appendChild(lotName); div3.appendChild(lotPrize); div3.appendChild(rule); div3.appendChild(inputPhone); div3.appendChild(inputCash); div3.appendChild(inputButton); div3.appendChild(lotTelephone);div3.appendChild(lotBet);div3.appendChild(lotState); div3.appendChild(lotCity);div3.appendChild(lotShip);
        div1.appendChild(breadcrumbs);
        div.appendChild(div1); div.appendChild(div2); div.appendChild(div3); div.appendChild(description);

        $(".current-lot").append(div);
    }

    $(".submit").click(function () {
       SetBet();
        location.reload();
    });

    function SortByPrizeReverse(b, a){
        var aPrize = a.prize;
        var bPrize = b.prize;
        return ((aPrize < bPrize) ? -1 : ((aPrize > bPrize) ? 1 : 0));
    }

    function SetBet() {
        var bet = $(".register-cash").val();
        console.log(+bet);
        var res = $(".lot-main-prize").html().split(" ");
        if ((+bet > +localStorage.getItem($(".lot-main-name").html())) && +bet > 0 && +bet >= +res[0]){
            localStorage.setItem($(".lot-main-name").html(),bet);
        }
        else
        console.log(localStorage.getItem($(".lot-main-name").html()));
    }

    function DrawProps(nameOfArray){
        //должна была быть реализация повтора кода в DrawLots
    }
    //901
});

