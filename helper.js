// JavaScript
console.log('helper is loaded');

const QLIK_CHART_SELLED_REPORT     = 'selled_report';
const QLIK_CHART_TURNOVER_REPORT   = 'turnover_report';
const QLIK_CHART_VORONKA_REPORT    = 'voronka_report';
const QLIK_CHART_DEBIT_CREDIT      = 'debit_credit';
const QLIK_CHART_NDS_REPORT        = 'nds_report';
const QLIK_CHART_AVG_CHEQUE_REPORT = 'avg_cheque_report';

var htmlParts = {};

htmlParts[QLIK_CHART_SELLED_REPORT] = '<div style="" class="filter_block"> \
        <!-- Юр.лица --> \
        <div id="QV01" style="" class="qvobject filter_item"></div> \
     \
        <!-- Группы менеджеров --> \
    <div id="QVroles" style="" class="qvobject filter_item"></div> \
     \
        <!-- Менеджер --> \
        <div id="QVmanager" style="" class="qvobject filter_item"></div> \
     \
        <!-- Клиент --> \
        <div id="QVclients" style="" class="qvobject filter_item"></div> \
     \
        <!-- С НДС / БЕЗ НДС --> \
    <div id="nds_radio_button" class="radio-button-filter" style="display:none; height:35px;"> \
        <table style="padding:10px"> \
        <tbody> \
        <tr> \
        <td><input name="nds_type" value="0" checked="" data-object_id="22eaff86-e65d-4741-a244-b0de37393213" type="radio"> Без \
    ндс \
    </td> \
    <td><input name="nds_type" value="1" data-object_id="c50c629b-13e5-4b52-bfe5-c0d37c4bad71" type="radio"> С ндс</td> \
    </tr> \
    </tbody> \
    </table> \
    </div> \
     \
    <!-- Группы товаров --> \
    <div id="QV02" style="" class="qvobject filter_item"></div> \
     \
        <!-- Производители --> \
        <div id="QVmanufacturers" style="" class="qvobject filter_item"></div> \
     \
        <!-- Номенклатура --> \
        <div id="QVproducts" style="" class="qvobject filter_item"></div> \
     \
        </div> \
        <div style="" id="tabs"> \
        <!-- График без ндс--> \
    <div class="tab" id="QV03-tab"> \
        <div id="QV03" style="" class="qvobject qlik_chart"></div> \
        </div> \
        <!-- График с ндс--> \
    </div>';
htmlParts[QLIK_CHART_TURNOVER_REPORT] = '<div style="" class="filter_block"> \
        <!-- Юр.лица --> \
        <div id="QV01" style="" class="qvobject filter_item"></div> \
        <!-- Склады --> \
        <div id="QVwarehouse" style="" class="qvobject filter_item"></div> \
     \
        <!-- Количество/Деньги --> \
        <div id="type_radio_button" class="radio-button-filter" style="display:none;height:30px;"> \
        <table style="padding:10px"> \
        <tbody> \
        <tr> \
        <td> \
        <input name="type_plot" value="count" checked="" type="radio"> В количестве \
    </td> \
    </tr> \
    <tr> \
    <td> \
    <input name="type_plot" value="money" type="radio"> В деньгах \
    </td> \
    </tr> \
    </tbody> \
    </table> \
    </div> \
    <!-- С НДС / БЕЗ НДС --> \
    <div id="nds_radio_button" class="radio-button-filter" style="display:none; height:35px;"> \
        <table style="padding:10px"> \
        <tbody> \
        <tr> \
        <td> \
        <input name="nds_type" value="0" checked="" data-object_id="ad0f87b7-c4e3-4795-b3fd-565ef8acd044" type="radio"> Без \
    ндс \
    </td> \
    <td> \
    <input name="nds_type" value="1" data-object_id="xppRBFa" type="radio"> С ндс \
    </td> \
    </tr> \
    </tbody> \
    </table> \
    </div> \
     \
    <!-- Группы товаров --> \
    <div id="QV02" style="" class="qvobject filter_item"></div> \
        <!-- Производители --> \
        <div id="QVmanufacturers" style="" class="qvobject filter_item"></div> \
     \
        <!-- Номенклатура --> \
        <div id="QVproducts" style="" class="qvobject filter_item"></div> \
     \
        </div> \
        <div style="" id="tabs"> \
        <!-- График без ндс--> \
    <div class="tab" id="QV03-tab"> \
        <div id="QV03" style="" class="qvobject qlik_chart"></div> \
        </div> \
        <!-- График с ндс--> \
    </div>';
htmlParts[QLIK_CHART_VORONKA_REPORT] = '<div style="" class="filter_block"> \
        <!-- Юр.лица --> \
        <div id="QV01" style="" class="qvobject filter_item"></div> \
        <!-- Склады --> \
        <div id="QVwarehouse" style="" class="qvobject filter_item"></div> \
     \
     \
        <!-- Группы товаров --> \
    <div id="QV02" style="" class="qvobject filter_item"></div> \
        <!-- Производители --> \
        <div id="QVmanufacturers" style="" class="qvobject filter_item"></div> \
     \
        <!-- Количество/Деньги --> \
        <div id="type_radio_button" class="radio-button-filter" style="display:none;height:30px;"> \
        <table style="padding:10px"> \
        <tbody> \
        <tr> \
        <td> \
        <input name="type_plot" value="count" checked="" type="radio"> В количестве \
    </td> \
    </tr> \
    <tr> \
    <td> \
    <input name="type_plot" value="money" type="radio"> В деньгах \
    </td> \
    </tr> \
    </tbody> \
    </table> \
    </div> \
    <!-- С НДС / БЕЗ НДС --> \
    <div id="nds_radio_button" class="radio-button-filter" style="display:none; height:35px;"> \
        <table style="padding:10px"> \
        <tbody> \
        <tr> \
        <td> \
        <input name="nds_type" value="0" checked="" data-object_id="CmPLDC" type="radio"> Без ндс \
    </td> \
    <td> \
    <input name="nds_type" value="1" data-object_id="EpdQJ" type="radio"> С ндс \
    </td> \
    </tr> \
    </tbody> \
    </table> \
    </div> \
    </div> \
    <div style="" id="tabs"> \
        <!-- График без ндс--> \
    <div class="tab" id="QV03-tab"> \
        <div id="QV03" style="" class="qvobject qlik_chart"></div> \
        </div> \
        <!-- График с ндс--> \
    </div>';
htmlParts[QLIK_CHART_DEBIT_CREDIT] = '<div style="" class="filter_block"> \
        <!-- Юр.лица --> \
        <div id="QV01" style="" class="qvobject filter_item"></div> \
        <!-- Склады --> \
        <div id="QVwarehouse" style="" class="qvobject filter_item"></div> \
     \
     \
        <!-- Группы товаров --> \
    <div id="QV02" style="" class="qvobject filter_item"></div> \
        <!-- Производители --> \
        <div id="QVmanufacturers" style="" class="qvobject filter_item"></div> \
        <!-- Производители --> \
        <div id="QVvendors" style="" class="qvobject filter_item"></div> \
     \
        </div> \
        <div style="" id="tabs"> \
        <!-- График без ндс--> \
    <div class="tab" id="QV03-tab"> \
        <div id="QV03" style="" class="qvobject qlik_chart"></div> \
        </div> \
        <!-- График с ндс--> \
    </div>';
htmlParts[QLIK_CHART_NDS_REPORT] = '<div style="" class="filter_block"> \
        <!-- Юр.лица --> \
        <div id="QV01" style="width: 180px; height: 50px;" class="qvobject filter_item"></div> \
     \
        </div> \
        <div style="" id="tabs"> \
        <!-- График без ндс--> \
    <div class="tab" id="QV03-tab"> \
        <div id="QV03" style="" class="qvobject qlik_chart"></div> \
        </div> \
        <!-- График с ндс--> \
    </div>';
htmlParts[QLIK_CHART_AVG_CHEQUE_REPORT] = '<div style="" class="filter_block"> \
        <!-- Юр.лица --> \
        <div id="QV01" style="" class="qvobject filter_item"></div> \
        <!-- Склады --> \
        <div id="QVwarehouse" style="" class="qvobject filter_item"></div> \
     \
     \
        <!-- Группы товаров --> \
    <div id="QV02" style="" class="qvobject filter_item"></div> \
        <!-- Производители --> \
        <div id="QVmanufacturers" style="" class="qvobject filter_item"></div> \
     \
        </div> \
        <div style="" id="tabs"> \
        <!-- График без ндс--> \
    <div class="tab" id="QV03-tab"> \
        <div id="QV03" style="" class="qvobject qlik_chart"></div> \
        </div> \
        <!-- График с ндс--> \
    </div>';

$(document).ready(function () {
    $('body').on('resize', function () {
        //location.reload();
    })
});

var paramsObject = {
    qlik: null,
    params: null
};

var charts = {};
charts[QLIK_CHART_SELLED_REPORT]     = {
    template: htmlParts[QLIK_CHART_SELLED_REPORT],
    init    : function (callback) {
        //var app = qlik.openApp('f1e94e82-1059-4f8c-8e42-598e63261ce6', config);

        var app = paramsObject.qlik.openApp(paramsObject.params.appId, config);
        //get objects -- inserted here --

        app.getObject('QVmanager', 'PKPuG');
        app.getObject('QVroles', 'PgWvBw');
        app.getObject('QV02', '104b6e24-e78b-4a4e-8167-180bbea6e378');
        app.getObject('QVclients', 'GDdhpC');

        app.getObject('QVproducts', 'jwCaR');
        app.getObject('QVmanufacturers', 'WRRgCw');
        //app.getObject('QV04','weJC');

        app.getObject('QV01', 'hvSjBDJ');

        $(document).ready(function () {
            $('[name="nds_type"]').click(function () {
                $('#QV03').html('');
                app.getObject('QV03', $(this).attr('data-object_id'));
            });
            $('[name="nds_type"]:checked').click();
            $('#nds_radio_button').show();
        });

        if(callback && typeof callback === 'function') {
            callback();
        }
    }
};
charts[QLIK_CHART_TURNOVER_REPORT]   = {
    template: htmlParts[QLIK_CHART_TURNOVER_REPORT],
    init    : function (callback) {
        //var app = qlik.openApp('f1e94e82-1059-4f8c-8e42-598e63261ce6', config);

        var app = paramsObject.qlik.openApp(paramsObject.params.appId, config);
        //get objects -- inserted here --
        app.getObject('QVwarehouse', 'NZceQu');

        var COUNT_PLOT = '46644ba1-f188-4005-90ac-3d0b9570644c';
        app.getObject('QV02', 'b551d1c4-0372-4a5a-99b9-aef99b763093');
        app.getObject('QV01', '8facec66-e28b-4901-b1be-17b5495b532d');

        app.getObject('QVproducts', '5f2cda22-f3a0-4f4a-a097-d9a3c72dd002');
        app.getObject('QVmanufacturers', 'e96fd4a5-145d-452e-bf8c-baa0750d2111');
        //app.getObject('QV04','weJC');

        function showPlot() {
            var type_plot = $('[name="type_plot"]:checked').val();
            var ToShowId  = COUNT_PLOT;
            if (type_plot == 'count') {
                $('#nds_radio_button').hide();
            } else {
                ToShowId = $('[name="nds_type"]:checked').attr('data-object_id');
                $('#nds_radio_button').show();
            }
            app.getObject('QV03', ToShowId);

        }

        $(document).ready(function () {

            $('[name="type_plot"]').click(function () {
                showPlot();
            });

            $('[name="nds_type"]').click(function () {
                showPlot();
            });

            $('[name="type_plot"]:checked').click();
            $('#type_radio_button').show();
        });

        if(callback && typeof callback === 'function') {
            callback();
        }
    }
};
charts[QLIK_CHART_VORONKA_REPORT]    = {
    template: htmlParts[QLIK_CHART_VORONKA_REPORT],
    init    : function (callback) {
        //var app = qlik.openApp('f1e94e82-1059-4f8c-8e42-598e63261ce6', config);

        var app = paramsObject.qlik.openApp(paramsObject.params.appId, config);
        //get objects -- inserted here --

        app.getObject('QVmanufacturers', 'JyxE');
        app.getObject('QVwarehouse', 'DremVjU');
        app.getObject('QV02', 'YAUbT');

        app.getObject('QV01', 'KhNu');

        var COUNT_PLOT = 'eb8aa8bc-13f1-44c0-a027-d1335777e213';

        //app.getObject('QV04','weJC');

        function showPlot() {
            var type_plot = $('[name="type_plot"]:checked').val();
            var ToShowId  = COUNT_PLOT;
            if (type_plot == 'count') {
                $('#nds_radio_button').hide();
            } else {
                ToShowId = $('[name="nds_type"]:checked').attr('data-object_id');
                $('#nds_radio_button').show();
            }
            app.getObject('QV03', ToShowId);

        }

        $(document).ready(function () {

            $('[name="type_plot"]').click(function () {
                showPlot();
            });

            $('[name="nds_type"]').click(function () {
                showPlot();
            });

            $('[name="type_plot"]:checked').click();
            $('#type_radio_button').show();
        });

        if(callback && typeof callback === 'function') {
            callback();
        }
    }
};
charts[QLIK_CHART_DEBIT_CREDIT]      = {
    template: htmlParts[QLIK_CHART_DEBIT_CREDIT],
    init    : function (callback) {
        //var app = qlik.openApp('f1e94e82-1059-4f8c-8e42-598e63261ce6', config);

        var app = paramsObject.qlik.openApp(paramsObject.params.appId, config);

        //get objects -- inserted here --
        app.getObject('QVmanufacturers', 'RXHmP');
        app.getObject('QV02', 'RgGVTPd');
        app.getObject('QVwarehouse', 'UhXfbL');
        app.getObject('QV03', 'JPFHXJ');
        app.getObject('QVvendors', 'ZXhGGJ');

        app.getObject('QV01', 'akStYN');

        if(callback && typeof callback === 'function') {
            callback();
        }
    }
};
charts[QLIK_CHART_NDS_REPORT]        = {
    template: htmlParts[QLIK_CHART_NDS_REPORT],
    init    : function (callback) {
        var app = paramsObject.qlik.openApp(paramsObject.params.appId, config);

        app.getObject('QV03', 'eUScwPh');
        app.getObject('QV01', 'wWKcDC');

        function showPlot() {
            var type_plot = $('[name="type_plot"]:checked').val();
            var ToShowId  = COUNT_PLOT;
            if (type_plot == 'count') {
                $('#nds_radio_button').hide();
            } else {
                ToShowId = $('[name="nds_type"]:checked').attr('data-object_id');
                $('#nds_radio_button').show();
            }

        }

        $(document).ready(function () {

            $('[name="type_plot"]').click(function () {
                showPlot();
            });

            $('[name="nds_type"]').click(function () {
                showPlot();
            });

            $('[name="type_plot"]:checked').click();
            $('#type_radio_button').show();
        });

        if(callback && typeof callback === 'function') {
            callback();
        }
    }
};
charts[QLIK_CHART_AVG_CHEQUE_REPORT] = {
    template: htmlParts[QLIK_CHART_AVG_CHEQUE_REPORT],
    init    : function (callback) {
        var app = paramsObject.qlik.openApp(paramsObject.params.appId, config);

        app.getObject('QV03', '93b6050b-2e41-4413-90b3-b21c358c193c');
        app.getObject('QVmanufacturers', 'df268e04-0abf-469b-a414-bee79b3c9d4c');
        app.getObject('QVwarehouse', 'ca95e114-5ed8-4a82-83ad-bbb65208ae57');
        app.getObject('QV02', '800a9b0c-5ca0-467d-8688-b5f639be415c');
        app.getObject('QV01', 'bc63a321-02a4-4c6f-921d-f9fce2ff9b02');

        if(callback && typeof callback === 'function') {
            callback();
        }
    }
};

function loadPage(id, qlik) {
    $('.container').html(charts[id].template);

    paramsObject.qlik = qlik;
    paramsObject.qlik.setOnError(function (error) {
        if (!error.code) {
            // Когда перезагружается qlik
            return false;
        }
        if (error.code == 16) {
            //Статистика собирается
            return false;
        }
        alert(error.code + " " + error.message);
    });
    paramsObject.params = getSearchParameters();

    //params.appId = '6bd5e7d1-14a2-4f18-8d57-3ef5d0b92317';

    if (paramsObject.params.appId) {
        fitChart();

        charts[id].init(function() {
            var id = paramsObject.params.uniqId ? paramsObject.params.uniqId : paramsObject.params.appId;

            if(id) {
                //parent.$('body').trigger(paramsObject.params.uniqId);
                window.parent.postMessage("LOAD_" + paramsObject.params.uniqId, '*');
                console.log('send load ' + paramsObject.params.uniqId);

                $(document).on('click', function () {
                    window.parent.postMessage("CLICK_" + paramsObject.params.uniqId, '*');
                    console.log('send click ' + paramsObject.params.uniqId);
                })
            }
        });

    } else {
        document.body.textContent = 'Error! appId is not specified!';
    }
    //callbacks -- inserted here --
    //open apps -- inserted here --
    //var app = qlik.openApp('35dbc9d0-b865-4e5d-afa8-b83d60871769', config);

    //create cubes and lists -- inserted here --
}

function fitChart() {
    var chart  = $('.qlik_chart');
    var width  = (paramsObject.params.width || $('body').width()) - $('.filter_block').width() - 20;
    var height = (paramsObject.params.height || $('body').height()) - 115;
    if (height < $('.filter_block').height()) {
        height = $('.filter_block').height();
    }
    chart.width(width);
    chart.height(height);
}

function getSearchParameters() {
    var prmstr = window.location.search.substr(1);
    return prmstr != null && prmstr != "" ? transformToAssocArray(prmstr) : {};
}

function transformToAssocArray(prmstr) {
    var params = {};
    var prmarr = prmstr.split("&");
    for (var i = 0; i < prmarr.length; i++) {
        var tmparr        = prmarr[i].split("=");
        params[tmparr[0]] = tmparr[1];
    }
    return params;
}
