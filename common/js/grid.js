        // 칼럼 레이아웃 작성        
        var columnLayout = [ {        
                             dataField : "name",        
                             headerText : "Name",        
                             width : 140        
                   }, {        
                             dataField : "country",        
                             headerText : "Country",        
                             width : 120    
                   }, {        
                             dataField : "product",        
                             headerText : "Product",        
                             width: 120        
                   }, {       
                             dataField : "quantity",        
                             headerText : "Quantity"        
                   }, {        
                             dataField : "price",        
                             headerText : "Price",        
                             dataType : "numeric"        
                   }, {        
                             dataField : "date",        
                             headerText : "Date"        
                   }        
        ];
        
         
        
        // 그리드 생성 후 해당 ID 보관 변수
        
        var myGridID;        
         
        
        // 윈도우 onload 이벤트 핸들링
        
        // 만약 jQuery 사용한다면, $(document).ready(function() {}); 사용하세요.
        
        window.onload = function() { 
        
                   // 실제로 #grid_wrap 에 그리드 생성        
                   myGridID = AUIGrid.create("#grid_wrap", columnLayout);        

                   // Ajax 요청 실행        
                   requestAjax();       
        };
        
                
        // Ajax 요청을 합니다.
        
        function requestAjax() {   
        
        // ajax 요청 전 그리드에 로더 표시        
        AUIGrid.showAjaxLoader(myGridID);     
         
        
        // ajax (XMLHttpRequest) 로 그리드 데이터 요청        
        ajax( {        
             url : "common/json/normal_100.json",        
             onSuccess : function(data) {        
                        if(!data) {        
                                  return;        
                        }
        
                        // 그리드 데이터        
                        var gridData = data;      
                       
                        // 로더 제거        
                        AUIGrid.removeAjaxLoader(myGridID);       
                                 
        
                        // 그리드에 데이터 세팅        
                        AUIGrid.setGridData(myGridID, gridData);           
             },
        
             onError : function(status, e) {        
                        alert("데이터 요청에 실패하였습니다.\r status : " + status);        
             }
        
        });
        
        };