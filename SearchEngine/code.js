var mobilePhones = {
    samsung: {
        Note9: {
            OS: "Android V8.1 Oreo",
            SIM: "Hybrid Dual SIM, Dual Standby, (Nano-SIM)",
            Chipset: "Exynos 9810 Octa",
            Size: "6.4 Inches",
            RAM: "8 GB",
            Storage: "512 GB",
            Price: "Rs. 170,000"
        },
        S9Plus: {
            OS: "Android V8.0 Oreo",
            SIM: "Hybrid Dual SIM, Dual Standby (Nano-SIM)",
            Chipset: "Exynos 9810 Octa",
            Size: "6.2 Inches",
            RAM: "6 GB",
            Storage: "128 GB",
            Price: "Rs. 111,999"
        },
        J6: {
            OS: "Android V8.0 Oreo",
            SIM: "Dual Sim, Dual Standby (Nano-SIM)",
            Chipset: "Exynos 7870",
            Size: "5.6 Inches",
            RAM: "3 GB / 4 GB",
            Storage: "32 GB / 64 GB",
            Price: "Rs. 25,999"
        }
    },
    huawei: {
        Nova3i: {
            OS: "Android V8.1 Oreo",
            SIM: "Hybrid Dual SIM, Dual Standby, (Nano-SIM)",
            Chipset: "Hisilicon Kirin 710",
            Size: "6.3 Inches",
            RAM: "4 GB",
            Storage: "128 GB",
            Price: "Rs. 39,999"
        },
        Y5Prime: {
            OS: "Android 8.1 Oreo (Go edition)",
            SIM: "Dual Sim, Dual Standby (Nano-SIM)",
            Chipset: "Mediatek MT6739",
            Size: "5.5 Inches",
            RAM: "2 GB",
            Storage: "16 GB",
            Price: "Rs. 16,999"
        },
        P20Pro: {
            OS: "Android V8.0 Oreo",
            SIM: "Hybrid Dual SIM, Dual Standby, (Nano-SIM)",
            Chipset: "Hisilicon Kirin 970",
            Size: "6.1 Inches",
            RAM: "6 GB",
            Storage: "128 GB",
            Price: "Rs. 99,999"
        }
    },
    motorola: {
        MotoE5Plus: {
            OS: "Android v8.0 Oreo",
            SIM: "Dual Sim, Dual Standby (Nano-SIM)",
            Chipset: "Qualcomm MSM8917 Snapdragon 425",
            Size: "6.0 Inches",
            RAM: "3 GB / 2 GB",
            Storage: "32 GB / 16 GB",
            Price: "Rs. 27,000"
        },
        MotoG6Plus: {
            OS: "Android v7.1.1 Nougat",
            SIM: "Dual Sim, Dual Standby (Nano-SIM)",
            Chipset: "Qualcomm SDM630 Snapdragon 630",
            Size: "5.9 Inches",
            RAM: "6 GB / 4 GB",
            Storage: "128 GB / 64 GB",
            Price: "Rs. 42,000"
        },
        MotoM: {
            OS: "Android OS, v6.0.1 (Marshmallow)",
            SIM: "Dual Sim",
            Chipset: "Mediatek Helio P10",
            Size: "5.5 inches",
            RAM: "4 GB / 3 GB",
            Storage: "64 GB / 32 GB",
            Price: "Rs. 25,400"
        }

    }
}

for (var key1 in mobilePhones) {
    for (var key2 in mobilePhones[key1]) {
        document.getElementById('table').innerHTML +=
            "<tr>"
            + "<th class='table-info thh'>" + "Model Name:" + "</th>"
            + "<th class='table-light thh'>" + key2 + " (" + key1.toUpperCase() + ")</th>" +
            "</tr>"
    }
}


var flag = false;
function check() {
    var inputValue = document.getElementById('inputBox').value;
    document.getElementById('inputBox').value = "";

    if (inputValue !== undefined && inputValue !== "" && inputValue !== " ") {
        for (var key1 in mobilePhones) {
            for (var key2 in mobilePhones[key1]) {
                if (inputValue.toLowerCase() === key2.toLowerCase()) {
                    flag = true;
                    document.getElementById('table').innerHTML =
                        "<tr>"
                        + "<th class='bg-danger'>" + "Model Name:" + "</th>"
                        + "<th class='bg-danger'>" + key1.toUpperCase() + " " + key2 + "</th>" +
                        "</tr>" +
                        "<tr>"
                        + "<th class='bg-primary'>" + "OS:" + "</th>"
                        + "<td class='bg-warning'>" + mobilePhones[key1][key2].OS + "</td>" +
                        "</tr>" +
                        "<tr>"
                        + "<th class='bg-primary'>" + "SIM:" + "</th>"
                        + "<td class='bg-warning'>" + mobilePhones[key1][key2].SIM + "</td>" +
                        "</tr>" +
                        "<tr>"
                        + "<th class='bg-primary'>" + "Chipset:" + "</th>"
                        + "<td class='bg-warning'>" + mobilePhones[key1][key2].Chipset + "</td>" +
                        "</tr>" +
                        "<tr>"
                        + "<th class='bg-primary'>" + "Size:" + "</th>"
                        + "<td class='bg-warning'>" + mobilePhones[key1][key2].Size + "</td>" +
                        "</tr>" +
                        "<tr>"
                        + "<th class='bg-primary'>" + "RAM:" + "</th>"
                        + "<td class='bg-warning'>" + mobilePhones[key1][key2].RAM + "</td>" +
                        "</tr>" +
                        "<tr>"
                        + "<th class='bg-primary'>" + "Storage:" + "</th>"
                        + "<td class='bg-warning'>" + mobilePhones[key1][key2].Storage + "</td>" +
                        "</tr>" +
                        "<tr>"
                        + "<th class='bg-primary'>" + "Price:" + "</th>"
                        + "<td class='bg-warning'>" + mobilePhones[key1][key2].Price + "</td>" +
                        "</tr>" +
                        '<tr><td></td><td><button class="btn btn-primary btn-lg btn-block" onClick="window.location.reload(true)">Reload</button></td></tr>';
                }
            }
        }
    } else {
        alert("You can't search empty or Only Space\nTry Again!...");
        var temp = true;
    }
    if (flag === false && temp !== true) {
        alert("Mobile Phone Not Found\nWrite correct spell please...");
    }
}
