<%@ Page Title="Read Text From Image" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" Async="true" CodeFile="index.aspx.cs" Inherits="index" %>

<%@ Register Src="~/userVideo.ascx" TagPrefix="uc1" TagName="WebUserControl" %>
<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">
    <link href="assets/css/flex.css" rel="stylesheet" />
    <link href="assets/css/cropper.css" rel="stylesheet" />
    <div class="f-row-Wcenter mian">
        <div class="app">
            <!--<div class="herad f-center">
                <img class="herad-image" src="/assets/image/key.jpg" alt="Alternate Text" />
            </div> -->
            <div class="app-center f-row-Wcenter">
                <div id="appBox" class="appBox ">
                    <uc1:WebUserControl runat="server" ID="openModel1" />
                    <div id="indexApp">


                        <!-- <select id="typeCA" onchange="ChangeCA()">
                            <option value="1">身份证OCR</option>
                            <option value="2">公安二要素</option>
                        </select>
                            <asp:DropDownList ID="ocrType2" runat="server">
                                <asp:ListItem Selected="True" Value="1">大陆护照</asp:ListItem>
                                <asp:ListItem Value="2">港澳台地区</asp:ListItem>
                            </asp:DropDownList>

                            GDCA是否返回头像
                            <asp:DropDownList ID="DropDownList1" runat="server">
                                <asp:ListItem Selected="True" Value="0">不返回 </asp:ListItem>
                                <asp:ListItem Value="1">返回 </asp:ListItem>
                            </asp:DropDownList> -->
                        <asp:TextBox ID="TextBox2" Visible="false" runat="server"></asp:TextBox>


                        <div>
                            <input type="hidden" value="" name="isCrop" id="imgWidth" />
                            <input type="hidden" value="" name="imgHeight" id="imgHeight" />
                            <input type="hidden" value="" name="isCrop" id="isCrop" runat="server" />
                            <input type="hidden" value="" name="base64String" id="base64String" runat="server" />
                            <input type="hidden" value="" name="IdCardBase64String" id="IdCardBase64String" runat="server" />
                            <input type="hidden" value="" name="IdPositiveBase64String" id="IdPositiveBase64String" runat="server" />
                            <input type="hidden" value="" name="IDbackBase64String" id="IDbackBase64String" runat="server" />
                            <input type="hidden" value="" name="videoBase64String" id="videoBase64String" runat="server" />
                        </div>


                        <br />

                        <asp:HiddenField ID="hdnfldUploadedFile" runat="server" Value="" />

                        <div class="zhengBox f-column f-column-Wcenter">
                            <div class="title zheng">
                                身份证正面(国徽)：
                            </div>
                            <div class="zheng imageBox">
                                <div class="rotateFn f-row-between">
                                     <input type="button" id="btnLeft" value="向左旋转" class="btn" onclick="rotateFn('1','#photo')">
                                     <input type="button" id="btnRight" value="向右旋转" class="btn" onclick="rotateFn('2','#photo')">
                                </div>
                                <div class="container" onclick="onFileUpload2()">
                                    
                                    <div class=" row">
                                        <div class="col-sm-6">
                                            <img src="" id="photo" name="photo" class="zhengimage" />
                                        </div>
                                        <div class="col-sm-2" style="display: none">
                                            <div style="display: none">
                                                <div class="img-preview"></div>
                                            </div>
                                            <div style="display: none">
                                                <img src="" alt="" id="result" class="zhengimage" >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="title zheng">
                                身份证反面面（头像）：
                            </div>
                            <div class="zheng imageBox">
                                <div class="zheng rotateFn f-row-between">
                                    <input type="button" id="btnLeft2" value="向左旋转" class="btn" onclick="rotateFn('1','#photo2')">
                                    <input type="button" id="btnRight2" value="向右旋转" class="btn" onclick="rotateFn('2','#photo2')">
                                </div>
                                <div class="container" style="width: 100%" onclick="onFileUpload3()">
                                    <div class=" row">
                                        <div class="col-sm-6">
                                            <img src="" id="photo2" />
                                        </div>
                                        <div class="col-sm-2" style="display: none">
                                            <div style="display: none">
                                                <div class="img-preview"></div>
                                            </div>
                                            <div style="display: none">
                                                <img src="" alt="" id="result2">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div class="f-column-Wcenter">
                            <div class="zheng">
                                视频文件
                                 <asp:FileUpload ID="FileUpload4" runat="server" />
                            </div>

                            <video style="height: 200px; width: 150px;" src="" id="video0" controls="controls"></video>
                        </div>

                        <asp:UpdatePanel ID="UpdatePanel1" runat="server">
                            <ContentTemplate>
                                <div class="userbox">
                                    <div class="f-row-Hcenter labelInput">
                                        <div class="userlabel">姓名：</div>
                                        <asp:TextBox class="Input" ID="UserName" runat="server"></asp:TextBox>
                                    </div>
                                    <div class="f-row-Hcenter labelInput">
                                        <div class="userlabel">身份证：</div>
                                        <asp:TextBox class="Input" ID="UserId" runat="server"></asp:TextBox>
                                    </div>
                                    <div class="f-row-Hcenter labelInput">
                                        <div class="userlabel">民族：</div>
                                        <asp:TextBox class="Input" ID="NationText" runat="server"></asp:TextBox>
                                    </div>
                                    <div class="f-row-Hcenter labelInput">
                                        <div class="userlabel">住址：</div>
                                        <asp:TextBox class="Input" ID="AddressText" runat="server"></asp:TextBox>
                                    </div>
                                    <div class="f-row-Hcenter labelInput">
                                        <div class="userlabel">性别：</div>
                                        <asp:TextBox class="Input" ID="GenderText" runat="server"></asp:TextBox>
                                    </div>
                                    <div class="f-row-Hcenter labelInput">
                                        <div class="userlabel">出生：</div>
                                        <asp:TextBox class="Input" ID="BirthdayText" runat="server"></asp:TextBox>
                                    </div>
                                </div>
                                <br />

                                <%--<input type="button" value="公安二要素" name="idnumberCheck" id="idnumberCheck" onclick="onclickOCR(2)" runat="server" />--%>
                                <input type="button" value="完成上載" name="livingbodyvalidate" id="livingbodyvalidate" onclick="onclickOCR(3)" class="btnOCR" /><br />
                                認證結果 :
                                <asp:Label ID="Label1" runat="server" Text=""></asp:Label>
                                <div style="display: none">
                                    <asp:Button ID="btnLivingbodyvalidate" runat="server" Text="btnLivingbodyvalidate" OnClick="btnLivingbodyvalidate_Click" />
                                    <%--公安--%>
                                    <asp:HiddenField ID="validate" runat="server" />
                                </div>

                            </ContentTemplate>
                            <%-- <Triggers>
                           <asp:PostBackTrigger ControlID="btnUpload" />
                           </Triggers>--%>
                        </asp:UpdatePanel>
                        <div>
                            <input type="hidden" value="" name="isCrop2" id="imgWidth2" />
                            <input type="hidden" value="" name="imgHeight2" id="imgHeight2" />
                            <input type="hidden" value="" name="isCrop2" id="isCrop2" runat="server" />
                            <input type="hidden" value="" name="base64String2" id="base64String2" runat="server" />
                        </div>
                        <asp:UpdatePanel ID="UpdatePanel2" runat="server">
                            <ContentTemplate>
                                <div class="mT20">
                                    <div class="f-row-Hcenter labelInput">
                                        <div class="userlabel">银行卡号：</div>
                                        <asp:TextBox class="Input" ID="bankNoText" runat="server"></asp:TextBox>
                                    </div>
                                    <div class="f-row-Hcenter labelInput">
                                        <div class="userlabel">预留电话：</div>
                                        <asp:TextBox class="Input" ID="bankMobileText" runat="server"></asp:TextBox>
                                    </div>
                                </div>

                                <input type="button" value="银联认证" name="unionPayVerify" id="unionPayVerify" onclick="onclickOCR(4)" class="btnOCR" /><br />
                                認證結果：<asp:Label ID="Label2" runat="server" Text=""></asp:Label><br />
                                <div style="display: none">
                                    <asp:Button ID="btnUnionPayVerify" runat="server" Text="btnUnionPayVerify" OnClick="btnUnionPayVerify_Click" />
                                    <%-- 证书主题--%>
                                    <asp:HiddenField ID="SubjectDn" runat="server" />
                                </div>
                            </ContentTemplate>
                        </asp:UpdatePanel>

                        <div class="mT20">
                            签名(手动签名) ：
                        <%--<input type="button" value="签章" name="autograph" id="autograph" v-on:click="onAutograph" />--%>
                            <div class="signatureImage-box">

                                <div id="signature"></div>

                            </div>
                            <div class="f-row-Hcenter labelInput">
                                <div class="userlabel">签名理由：</div>
                                <asp:TextBox class="Input" ID="reasonText" value='同意書' runat="server"></asp:TextBox>
                            </div>
                            <div id="tools"></div>
                            <asp:UpdatePanel ID="UpdatePanel4" runat="server">
                                <ContentTemplate>
                                    認證結果：<asp:Label ID="Label3" runat="server" Text=""></asp:Label><br />

                                    <asp:Button ID="btnVerifyAndApplyCert" runat="server" Text="btnVerifyAndApplyCert" OnClick="btnVerifyAndApplyCert_Click" Style="display: none" />
                                    <asp:HyperLink ID="pdfLink2" runat="server" Style="display: none"></asp:HyperLink>
                                </ContentTemplate>
                            </asp:UpdatePanel>


                        </div>

                        <%--<input type="button" value="确认签署" name="MergePdfHash" id="MergePdfHash" onclick="onclickOCR(8)" />--%>
                        <div class="mT20" v-if="downloadPDF">
                            <input type="button" value="下载PDF" onclick="download()" class="btnOCR" />
                        </div>
                        <div class="mT20" v-else>
                            <input type="button" value="下载PDF" class="btnOCR" style="background: #cccccc;" />
                        </div>
                        <div class="mT20">
                            <div class="f-row-Hcenter labelInput">
                                <div class="userlabel">事务 ID：</div>
                                <asp:TextBox ID="CAid" runat="server" class="Input"></asp:TextBox>
                            </div>
                            <div class="f-row-Hcenter labelInput">
                                <div class="userlabel">业务类型：</div>
                                <%--<select id="typeCA" onchange="changeTypeCA(event)" class="Input ">
                                    <option value="GN">公安认证</option>
                                    <option value="BANK">银联认证</option>
                                    <option value="APPLY">证书申请</option>
                                </select>--%>
                                <asp:DropDownList ID="typeCA" runat="server" onchange="changeTypeCA(event)" class="Input ">
                                    <asp:ListItem Selected="True" Value="">请选择业务类型</asp:ListItem>
                                    <asp:ListItem Value="GN">公安认证</asp:ListItem>
                                    <asp:ListItem Value="BANK">银联认证</asp:ListItem>
                                    <asp:ListItem Value="APPLY">证书申请</asp:ListItem>
                                </asp:DropDownList>
                            </div>
                            <div class="">
                                <input type="button" value="业务查询" class="btnOCR"  onclick="onChangeTypeCA()"/>
                            </div>
                        </div>
                        <div class="mT20">
                            <div class="f-row-Hcenter labelInput">
                                <div class="userlabel"> pdf文件：</div>
                                <asp:FileUpload ID="FileUploadCA" runat="server" />
                            </div>
                            <div class="">
                                <input type="button" value="PDF 验签" class="btnOCR"  onclick="onSignature()"/>
                            </div>
                        </div>
                        <asp:TextBox ID="ImageValue" Text="" runat="server" Width="95%" Height="200px" TextMode="MultiLine" />
                        
                    </div>
                </div>
                <div>
                    <input id="cdt1" type="text" style="display: none;" />
                    <input id="cdt2" type="text" style="display: none;" />
                    <input id="cdt3" type="text" style="display: none;" />
                    <asp:TextBox ID="pathtxt" Text="" runat="server" Width="100%" Visible="false" />
                    <%-- 身份证OCR --%>
                    <asp:HiddenField ID="hidIdCardOCR" runat="server" />
                    <%--  推送 PDF  --%>
                    <asp:HiddenField ID="hidCreateEmptySignature" runat="server" />

                    <%--银联认证--%>
                    <asp:HiddenField ID="PayVerify" runat="server" />

                    <%-- 申请证书的参数--%>
                    <asp:HiddenField ID="AndApplyCert" runat="server" />
                    <%-- 证书 --%>
                    <asp:HiddenField ID="ApplyCert" runat="server" />
                    <%-- 签署Parame --%>
                    <asp:HiddenField ID="MergePdfHashParame" runat="server" />
                    <%-- 签署 --%>
                    <asp:HiddenField ID="PdfHashRes" runat="server" />

                    <br />
                </div>
                <div style="display: none">
                    
                    <asp:FileUpload ID="FileUpload1" runat="server" />
                    <input type="button" value="大陆身份证OCR" name="IdCardOCR" id="IdCardOCR" onclick="onclickOCR(1)" />
                    <input type="button" value="香港身份证" name="hkIdCardOCR" id="hkIdCardOCR" onclick="onclickOCR(13)" />

                    <input type="button" value="获取证书主题" name="CertSubjectDn" id="CertSubjectDn" onclick="onclickOCR(5)" />
                    <input type="button" value="推送PDF" name="PushPDF" id="PushPDF" onclick="onclickOCR(6)" />
                    <input type="button" value="申请证书" name="VerifyAndApplyCert" id="VerifyAndApplyCert" onclick="onclickOCR(7)" />
                    签名地理位置：<asp:TextBox ID="locationText" runat="server" value='50.2,80.0'></asp:TextBox><br />

                    签章图片的宽度：<asp:TextBox ID="widthText" runat="server" value='60'></asp:TextBox><br />
                    签章图片的高度：<asp:TextBox ID="heightText" runat="server" value='50'></asp:TextBox><br />
                    签署位置集合：<asp:TextBox ID="signatureLocations" runat="server" Style="width: 70%" value='[{"pageNo":1,"x":380.0,"y":749.5}, {"pageNo":2,"x":90.0,"y":6.5}, {"pageNo":3,"x":90.0,"y":19.0},{"pageNo":4,"x":100.0,"y":283.0}]'></asp:TextBox><br />


                    <asp:FileUpload ID="FileUpload2" runat="server" style="visibility: hidden;"/>
                    <asp:FileUpload ID="FileUpload3" runat="server" style="visibility: hidden;"/>
                    <input type="hidden" value="" name="signatureImage" id="signatureImage" runat="server" />
                    <asp:Button ID="btnIdCardOCR" runat="server" Text="btnIdCardOCR" OnClick="btnIdCardOCR_Click" />
                    <asp:Button ID="btnIdnumberCheck" runat="server" Text="idnumberCheck" OnClick="btnIdnumberCheck_Click" />

                    <asp:Button ID="btnFFcode" runat="server" Text="btnFFcode" OnClick="btnFFcode_Click" />

                    <asp:Button ID="btnCertSubjectDn" runat="server" Text="btnCertSubjectDn" OnClick="btnCertSubjectDn_Click" />
                    <asp:UpdatePanel ID="UpdatePanel3" runat="server">
                        <ContentTemplate>
                            <asp:Button ID="btnPushPDF" runat="server" Text="btnPushPDF" OnClick="btnPushPDF_Click" />
                            <asp:HiddenField ID="HiddenField1" runat="server" />
                        </ContentTemplate>
                    </asp:UpdatePanel>

                    <%--<asp:Button ID="btnMergePdfHash" runat="server" Text="btnMergePdfHash" OnClick="btnMergePdfHash_Click" />--%>
                    <asp:TextBox ID="TextBox1" runat="server"></asp:TextBox>
                    <asp:Button ID="btnGDCAIdCardOCR" runat="server" Text="GDCAIdCardOCR" OnClick="btnGDCAIdCardOCR_Click" />
                    <asp:Button ID="btnGDCAPassportOCR" runat="server" Text="GDCAPassportOCR" OnClick="btnGDCAPassportOCR_Click" />
                    <asp:Button ID="btnChangeTypeCA"  runat="server" Text="业务查询" OnClick="btnChangeTypeCA_Click" />
                    <asp:Button ID="btnSignature"  runat="server" Text="PDF 验签"  OnClick="btnSignature_Click"/>
                </div>
                <div class="f-row res">
                    <div>
                        身份证OCR
                            <br />
                        <asp:TextBox ID="hidIdCardOCRText" runat="server" Width="95%" Height="200px" TextMode="MultiLine"></asp:TextBox>

                        公安<br />
                        <asp:TextBox ID="validateText" runat="server" Width="95%" Height="90px" TextMode="MultiLine"></asp:TextBox><br />
                        银联认证<br />
                        <asp:TextBox ID="PayVerifyText" runat="server" Width="95%" Height="90px" TextMode="MultiLine"></asp:TextBox><br />
                        证书主题<br />
                        <asp:TextBox ID="SubjectDnText" runat="server" Width="95%" Height="90px" TextMode="MultiLine"></asp:TextBox>
                    </div>
                    <div>
                        推送 PDF 
                        <br />
                        <asp:TextBox ID="hidCreateEmptySignatureText" runat="server" Width="95%" Height="200px" TextMode="MultiLine"></asp:TextBox><br />
                        申请证书的参数<br />
                        <asp:TextBox ID="AndApplyCertText" runat="server" Width="95%" Height="90px" TextMode="MultiLine"></asp:TextBox><br />
                        证书
                        <br />
                        <asp:TextBox ID="ApplyCertText" runat="server" Width="95%" Height="90px" TextMode="MultiLine"></asp:TextBox><br />
                        签署<br />
                        <asp:TextBox ID="PdfHashText" runat="server" Width="95%" Height="90px" TextMode="MultiLine"></asp:TextBox><br />
                    </div>
                </div>

            </div>


        </div>
    </div>
    <script src="cropperjs/js/jquery/3.2.1/jquery.min.js"></script>
    <script src="assets/js/cropper.js"></script>
    <script type="text/javascript">


        var videostr = false;
        var zheng = "photo"; //photo/photo2
        const video = document.getElementById("video"),
             canvas = document.getElementById("canvas"),
            context = canvas.getContext("2d");
        function oBtn() {
            if (videostr == true) { //getUserMedia返回false说明调用失败  
                context.drawImage(video, 0, 0, 300, 225);
                if (zheng == "photo") {
                    let imagephoto = document.getElementsByName("photo");
                    imagephoto.forEach((itme) => {
                       // itme.src = canvas.toDataURL("image/png").toBlob();
                        itme.src = canvas.toBlob((Blob) => {
                            itme.src = window.URL.createObjectURL(Blob);
                            console.log("imagephoto Blob", itme.src)
                        });
                    });
                    console.log("imagephoto", imagephoto)

                }
            } else {
                console.log("获取摄像头失败，无法拍照！");
            }
        };

        window.onload = function () {
            

            var flag = getUserMedia({
                audio: false,
                video: true
            }, success, error);
            function getUserMedia(constraints, success, error) {
                if (navigator.getUserMedia) { //旧版API  
                    navigator.getUserMedia(constraints, success, error);
                } else if (navigator.mozGetUserMedia) { //Firefox API   
                    navigator.mozGetUserMedia(constraints, success, error);
                } else if (navigator.webkitGetUserMedia) { //webkit内核浏览器 API  
                    navigator.webkitGetUserMedia(constraints, success, error);
                } else if (navigator.mediaDevices.getUserMedia) { //最新版API  
                    navigator.mediaDevices.getUserMedia(constraints).then(success).catch(error);
                } else {
                    videostr = false;
                }
                videostr = true;
            }

           


            function success(stream) {
                //console.log(JSON.stringify(stream));

                video.srcObject = stream;
                video.play();
                var VideoTrack = stream.getVideoTracks()
                console.log(VideoTrack);
            }

            function error(err) {
                console.log(err);
            }
        }
    </script>
    <script>
        let indexApp = new Vue({
            el: '#indexApp',
            data() {
                return {
                    downloadPDF: ''
                }
            },
            watch: {
                downloadPDF(val) {
                    console.log("PdfHashRes val", val);
                }
            }
        });
        var deg = 0;

        function rotateFn(type, tag) {
            if (type == 1) {
                deg += 90
            } else {
                deg -= 90
            }

            $(tag).cropper("rotate", deg);
        }

        function changeTypeCA(e) {
            console.log("e  ", e.target.value);
        }
        function onChangeTypeCA() {
            console.log("onChangeTypeCA >>>  btnChangeTypeCA");
            //transactionId
            //businessType
            $("#MainContent_btnChangeTypeCA").click();
        }
        function onSignature() {
            console.log("PDF 验签 >>>  onSignature btnSignature");
            $("#MainContent_btnSignature").click();
        }
        function onFileUpload2() {
            $("#MainContent_FileUpload2").click();
        }
        function onFileUpload3() {
            $("#MainContent_FileUpload3").click();
        }
        function ChangeCA() {
            var ca = $("#typeCA").val();
            if (ca == "1") {
                $("#MainContent_ImageValue").css("display", "");
                $(".container").css("display", "none");
                $("#IdCardOCR").css("display", "");
            }
            else {
                $(".container").css("display", "none");
                $("#IdCardOCR").css("display", "none");
                $("#btnLeft").css("display", "none");
                $("#btnRight").css("display", "none");
            }
            if (ca == "2") {
                $("#eys").css("display", "");
                $("#MainContent_ImageValue").css("display", "none");
                $("#idnumberCheck").css("display", "");

            }
            else {
                $("#eys").css("display", "none");
                $("#idnumberCheck").css("display", "none");
            }

        }
        function onclickOCR(num) {
            if (num == 21) {
                $("#MainContent_btnFFcode").click();
                return;
            }
            if (num == 2) {
                //加条件判断
                if ($("#MainContent_UserName").val() == "") {
                    alert("用户名不能位空");
                    return;
                }
                if ($("#MainContent_UserId").val() == "") {
                    alert("身份证不能位空");
                    return;
                }
                $("#MainContent_btnIdnumberCheck").click();
                return;
            }

            if (num == 3) {
                //判断文件不能为空
                if ($("#MainContent_FileUpload2").val() == "") {
                    alert("身份证正面不能为空")
                    return;
                }
                if ($("#MainContent_FileUpload3").val() == "") {
                    alert("身份证反面不能为空")
                    return;
                }
                if ($("#MainContent_FileUpload4").val() == "") {
                    alert("人脸核身视频不能为空")
                    return;
                }
                $("#MainContent_ImageValue").val("Scanning....");
                if (crop("IdPositive") == false) {
                    return;
                }
                if (crop("IDback") == false) {
                    return;
                }
                //if ($("#MainContent_UserName").val() == "") {
                //    alert("用户名不能位空");
                //    return;
                //}
                //if ($("#MainContent_UserId").val() == "") {
                //    alert("身份证不能位空");
                //    return;
                //}
                //if ($("#MainContent_NationText").val() == "") {
                //    alert("国家不能为空");
                //    return;
                //}
                //if ($("#MainContent_AddressText").val() == "") {
                //    alert("地址不能为空");
                //    return;
                //}
                //if ($("#MainContent_GenderText").val() == "") {
                //    alert("性别不能为空");
                //    return;
                //}
                //if ($("#MainContent_BirthdayText").val() == "") {
                //    alert("出生不能为空");
                //    return;
                //}

                $("#MainContent_btnLivingbodyvalidate").click();
                return;
            }
            if (num == 4) {
                if ($("#MainContent_bankNoText").val() == "") {
                    alert("请填写银行卡号码");
                    return;
                }
                if ($("#MainContent_bankMobileText").val() == "") {
                    alert("请填写手机号码");
                    return;
                }
                $("#MainContent_btnUnionPayVerify").click();
                return;
            }
            if (num == 5) {
                $("#MainContent_btnCertSubjectDn").click();
                return;
            }
            if (num == 6) {

                let SubjectDn = $("#MainContent_SubjectDn").val();
                let validate = $("#MainContent_validate").val();
                let PayVerify = $("#MainContent_PayVerify").val();
                if (SubjectDn == "" || SubjectDn == null) {
                    alert("证书主题不能为空");
                    return;
                }
                if (validate == "" || validate == null) {
                    alert("尚未进行活体认证");
                    return;
                }
                if (PayVerify == "" || PayVerify == null) {
                    alert("尚未银联认证");
                    return;
                }
                /**
                  * 创建P10
                 */
                SubjectDn = JSON.parse(SubjectDn) || "{}";
                validate = JSON.parse(validate) || "{}";
                PayVerify = JSON.parse(PayVerify) || "{}";


                let SubjectDnstr = SubjectDn.data.subjectDn;
                console.log("6 1", SubjectDn);
                console.log("6 2", SubjectDnstr);
                createPKCS10(SubjectDnstr).then(response => {
                    console.log("response.privateKey", response.privateKey);
                    console.log("response.p10", response.p10);
                    let data = {
                        authenticationId: validate.data.authenticationId,
                        privateKey: response.privateKey,
                        p10: response.p10,
                        bankauthId: PayVerify.data.bankauthId
                    };
                    let str = JSON.stringify(data);
                    $("#MainContent_AndApplyCert").val(str);
                    $("#MainContent_AndApplyCertText").val(str);
                    console.log("6 AndApplyCert", data);
                    $("#MainContent_btnPushPDF").click();
                })
                return;
            }
            if (num == 7) {
                let SubjectDn = $("#MainContent_SubjectDn").val();
                let validate = $("#MainContent_validate").val();
                let PayVerify = $("#MainContent_PayVerify").val();
                let hidCreateEmptySignature = $("#MainContent_hidCreateEmptySignature").val();
                let AndApplyCert = $("#MainContent_AndApplyCert").val();

                if (SubjectDn == "" || SubjectDn == null) {
                    alert("证书主题不能为空");
                    return;
                }
                if (validate == "" || validate == null) {
                    alert("尚未进行活体认证");
                    return;
                }
                if (PayVerify == "" || PayVerify == null) {
                    alert("尚未银联认证");
                    return;
                }

                if (hidCreateEmptySignature == "" || hidCreateEmptySignature == null) {
                    alert("尚未提交pdf");
                    return;
                }

                if (AndApplyCert == "" || AndApplyCert == null) {
                    alert("请重试提交pdf");
                    return;
                }



                /**
                  * 创建P10
                 */
                SubjectDn = JSON.parse(SubjectDn) || "{}";
                validate = JSON.parse(validate) || "{}";
                PayVerify = JSON.parse(PayVerify) || "{}";
                AndApplyCert = JSON.parse(AndApplyCert) || "{}";

                hidCreateEmptySignature = JSON.parse(hidCreateEmptySignature);
                let signHash = hidCreateEmptySignature.data.signHash;
                let privateKey = AndApplyCert.privateKey;

                console.log("privateKe", privateKey);
                console.log("signHash", signHash);
                let p1Data = createPKCS1ByBase64(privkeyConvertPem(privateKey), signHash)
                let data = {
                    p1Data: p1Data,
                    pdfId: hidCreateEmptySignature.data.pdfId
                };
                let str = JSON.stringify(data);
                console.log("7 MergePdfHashParame", data);
                $("#MainContent_MergePdfHashParame").val(str);
                $("#MainContent_btnVerifyAndApplyCert").click();

                return;
            }
            //if (num == 8) {
            //    let ApplyCert = $("#MainContent_ApplyCert").val();
            //    if (ApplyCert == "" || ApplyCert == null) {
            //        alert("尚未申请证书");
            //        return;
            //    }
            //    ApplyCert = JSON.parse(ApplyCert) || "{}";
            //    let MergePdfHashParame = $("#MainContent_MergePdfHashParame").val();
            //    MergePdfHashParame = JSON.parse(MergePdfHashParame);
            //    MergePdfHashParame.signCertSn = ApplyCert.data.signCertSn;
            //    let MergePdfHashParameStr = JSON.stringify(MergePdfHashParame);
            //    $("#MainContent_MergePdfHashParame").val(MergePdfHashParameStr);
            //    $("#MainContent_btnMergePdfHash").click();
            //    return;
            //}
            if (num == 100) {
                setTimeout(addImage, 2000);
                return;
            }
            $("#MainContent_ImageValue").val("Scanning....");
            if (crop() == false) {
                return;
            }
            //crop();

            if (num == 1) {
                $("#MainContent_btnIdCardOCR").click();
            }

            if (num == 12) {
                $("#MainContent_btnGDCAPassportOCR").click();
            }
            if (num == 13) {
                $("#MainContent_btnGDCAIdCardOCR").click();
            }

        }
        function addImage() {
            //crop();
            $("#MainContent_btnUpload").click();
            return;
        }

        // 修改自官方demo的js
        var initCropper = function (img, input, hidstring) {
            var $image = img;
            var options = {
                aspectRatio: "",
                viewMode: 2,
                preview: '.img-preview',
                autoCrop: false,
                cropBoxMovable: true,
                rotatable: true,


            };
            $image.cropper(options);

            //$image.cropper('destroy').cropper({'aspectRatio': dataRatio});
            var $inputImage = input;
            var uploadedImageURL;
            if (URL) {
                // 给input添加监听
                $inputImage.change(function () {
                    //$("#MainContent_ImageValue").val("");
                    //console.log("进入方法");
                    //$('#photo').cropper('reset');
                    //$('#photo').cropper('destroy');
                    var files = this.files;
                    var file;
                    if (!$image.data('cropper')) {
                        return;
                    }
                    if (files && files.length) {
                        file = files[0];
                        let flag = false;
                        //let file = e.target.files[0];
                        let url = window.URL.createObjectURL(file);
                        let image = new Image();
                        image.src = url;
                        image.onload = function () {
                            //setTimeout(function () {
                            var ImgMaxWidth = '<%=ConfigurationManager.AppSettings["ImgMaxWidth"].ToString() %>';
                            var ImgMaxHeight = '<%=ConfigurationManager.AppSettings["ImgMaxHeight"].ToString() %>';
                            var ImgminWidth = '<%=ConfigurationManager.AppSettings["ImgminWidth"].ToString() %>';
                            var ImgMinHeight = '<%=ConfigurationManager.AppSettings["ImgMinHeight"].ToString() %>';
                            var ImgSize = '<%=ConfigurationManager.AppSettings["ImgSize"].ToString() %>';
                            if (image.width > ImgMaxWidth || image.height > ImgMaxWidth) {
                                flag = true;
                                window.alert('图像的宽或高大于' + ImgMaxWidth + 'px，请处理后在上传。');
                                $inputImage.val('');
                                return flag;
                            }
                            if (image.width < ImgminWidth || image.height < ImgminWidth) {
                                flag = true;
                                window.alert('图像的宽或高不能小于' + ImgminWidth + 'px');
                                $inputImage.val('');
                                return flag;
                            }

                            //}, 1);
                            if (file.size >= 1024 * 1024 * ImgSize) {
                                window.alert('图片不能大于' + ImgSize + 'M');
                                $inputImage.val('');
                                return;
                            }

                            // 判断是不是图像文件
                            if (/^image\/\w+$/.test(file.type)) {

                                // 若是URL已存在就先释放
                                if (uploadedImageURL) {
                                    URL.revokeObjectURL(uploadedImageURL);
                                }
                                uploadedImageURL = URL.createObjectURL(file);
                                // 销毁cropper后更改src属性再从新建立cropper
                                $image.cropper('destroy').attr('src', uploadedImageURL).cropper(options);
                                compressImg(file, hidstring);

                                //$inputImage.val('');
                                //onclickOCR(6);

                            } else {
                                window.alert('请选择一个图像文件！');
                            }
                        }

                    }
                });
            } else {
                $inputImage.prop('disabled', true).addClass('disabled');
            }
        }
        var crop2 = function () {
            var $image = $('#photo');
            var $target = $('#result');
            // $image.cropper('getCroppedCanvas',{
            //     // width:100, // 裁剪后的长宽
            //     // height:300
            // }).toBlob(function(blob){
            //     // 裁剪后将图片放到指定标签
            //     $target.attr('src', URL.createObjectURL(blob));
            // });
            var $imgData = $image.cropper('getCroppedCanvas');
            //console.log($imgData);
            if ($imgData == null) {
                window.alert('请上传图片！');
                return false;
            }
            var dataurl = $imgData.toDataURL('image/jpeg');
            $target.attr("src", dataurl)

            var data = $imgData;
            //let newImage = new Image()
            //// 这里将src传入需要获取信息的图片地址或base64
            //newImage.src = dataurl
            //// onload是异步的,封装的话可以用promise
            //newImage.onload = function() {
            //    $("#imgWidth").val(newImage.width);
            //    $("#imgHeight").val(newImage.height);
            //}
            if (Math.round(data.width) >= 2500 || Math.round(data.height) >= 2500) {
                document.getElementById("MainContent_base64String").value = "";
            }
            else {
                document.getElementById("MainContent_base64String").value = dataurl;
            }
            return true;
        }
        var crop = function (hidstring) {
            var typeNum = "";
            //if(hidstring=="IdCard")
            //{
            //}
            if (hidstring == "IdPositive") {
                typeNum = "";
            }
            if (hidstring == "IDback") {
                typeNum = "2";
            }
            var $image = $('#photo' + typeNum);
            var $target = $('#result' + typeNum);
            var $imgData = $image.cropper('getCroppedCanvas');
            //console.log($imgData);
            if ($imgData == null) {
                window.alert('请上传图片！');
                return false;
            }
            var dataurl = $imgData.toDataURL('image/jpeg');
            $target.attr("src", dataurl)

            var data = $imgData;
            if (Math.round(data.width) >= 2500 || Math.round(data.height) >= 2500) {
                document.getElementById("MainContent_" + hidstring + "Base64String").value = "";
            }
            else {
                document.getElementById("MainContent_" + hidstring + "Base64String").value = dataurl;

            }
            return true;

        }
        $(function () {
            initCropper($('#photo'), $('#MainContent_FileUpload1'), "IdCard");
            initCropper($('#photo'), $('#MainContent_FileUpload2'), "IdPositive");
            initCropper($('#photo2'), $('#MainContent_FileUpload3'), "IDback");
            $("#MainContent_FileUpload4").change(function () {
                var objUrl = getObjectURL(this.files[0]);
                //console.log("objUrl = " + objUrl);
                if (objUrl) {
                    var fileName = this.files[0].name;
                    //console.log(fileName);
                    var fileType = fileName.substr(fileName.lastIndexOf(".")).toUpperCase();
                    if (fileType != ".MP3" && fileType != ".MP4") {
                        alert("视频上传MP3,MP4格式");
                        return false;
                    }
                    $("#video0").attr("src", objUrl);
                    fileTo();
                }
            });
        });

        function getObjectURL(file) {
            var url = null;
            if (window.createObjectURL != undefined) {
                url = window.createObjectURL(file);
            } else if (window.URL != undefined) {
                url = window.URL.createObjectURL(file);
            } else if (window.webkitURL != undefined) {
                url = window.webkitURL.createObjectURL(file);
            }
            return url;
        }

        //压缩图片方法
        function compressImg(file, hidstring) {

            var src;
            var fileSize = parseFloat(parseInt(file['size']) / 1024 / 1024).toFixed(2);
            var read = new FileReader();
            read.readAsDataURL(file);
            read.onload = function (e) {
                var img = new Image();
                img.src = e.target.result;
                img.onload = function () {
                    //默认按比例压缩    
                    var w = this.width,
                        h = this.height;
                    //生成canvas    
                    var canvas = document.createElement('canvas');
                    var ctx = canvas.getContext('2d');
                    var base64;
                    // 创建属性节点    
                    canvas.setAttribute("width", w);
                    canvas.setAttribute("height", h);
                    ctx.drawImage(this, 0, 0, w, h);
                    if (fileSize < 1) {
                        //如果图片小于一兆 那么不执行压缩操作
                        base64 = canvas.toDataURL(file['type'], 1);
                    } else if (fileSize > 1 && fileSize < 2) {
                        //如果图片大于1M并且小于2M 那么压缩0.5
                        base64 = canvas.toDataURL(file['type'], 0.6);
                    } else {
                        //如果图片超过2m 那么压缩0.2
                        base64 = canvas.toDataURL(file['type'], 0.5);
                    }

                    //callback(base64);
                    //document.getElementById("MainContent_base64String").value = base64;
                    //postForm(file, base64);
                    document.getElementById("MainContent_" + hidstring + "Base64String").value = base64;
                    postForm(file, base64, hidstring);
                };

            };

        }
        function dataURLtoBlob(dataurl) {
            var arr = dataurl.split(',');
            let mime = arr[0].match(/:(.*?);/)[1];
            let bstr = window.atob(arr[1]);
            let n = bstr.length;
            let u8arr = new Uint8Array(n);
            while (n--) {
                u8arr[n] = bstr.charCodeAt(n);
            }
            return new Blob([u8arr], {
                type: mime
            });
        }
        function postForm(file, base64, hidstring) {
            //var file = $('#input').prop('files')[0];
            var url = '<%=ConfigurationManager.AppSettings["WebUrl"].ToString() %>';//注意在website工程下，地址必须和浏览器的URL一样。不能使用相对地址，浏览器会进行重定向导致后台获取不到参数。在project工程下不会存在该问题，好坑人的
            var form = new FormData();
            form.append("media", dataURLtoBlob(base64), "file_" + Date.parse(new Date()) + file.name);
            form.append('type', "image");
            form.append("imageFileName", hidstring);
            xhr = new XMLHttpRequest();  // XMLHttpRequest 对象

            xhr.open("post", url, true);
            //xhr.setRequestHeader("Content-type", "multipart/form-data");
            //xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhr.send(form);
        }
        //限制上传图片尺寸
        function upImgWH(file) {
            let flag = false;
            //let file = e.target.files[0];
            let url = window.URL.createObjectURL(file);
            let image = new Image();
            image.src = url;
            image.onload = function () {
                //setTimeout(function () {
                if (image.width > 2500 || image.height > 2500) {
                    flag = true;
                    return flag;
                } else {
                    flag = false;
                    return flag;
                }

                //}, 1);
            }
            return flag;
        }
        function download() {
            var url = $("#MainContent_pdfLink2").attr('href');
            var fileName = $("#MainContent_pdfLink2").attr('href').split('/')[2];
            triggerADownload(url, fileName)
        }
        function triggerADownload(url, fileName) {
            var a = document.createElement('a')
            document.body.appendChild(a)
            a.href = url
            a.download = fileName
            a.click()
            document.body.removeChild(a);
        }
        function fileTo() {
            let reader = new FileReader();
            var myFile = document.querySelector('#MainContent_FileUpload4');

            var file = myFile.files[0];
            reader.readAsDataURL(file);
            reader.onload = function () {
                var data = reader.result;
                //console.log(data);
                $("#MainContent_videoBase64String").val(data);
                //console.log();

            };
            reader.onerror = function () {
                console.log('读取失败');
                console.log(reader.error);
            }

        }
        function CallbackFunction(id, msg) {
            $("#MainContent_" + id).val(msg);
        }
        function RollBackMessage(mes) {
            alert("谢谢");
        }

    </script>

    <script type="text/javascript">
        /*  @preserve
        jQuery pub/sub plugin by Peter Higgins (dante@dojotoolkit.org)
        Loosely based on Dojo publish/subscribe API, limited in scope. Rewritten blindly.
        Original is (c) Dojo Foundation 2004-2010. Released under either AFL or new BSD, see:
        http://dojofoundation.org/license for more information.
        */
        (function ($) {
            var topics = {};
            //插件的类型
            $.publish = function (topic, args) {
                //插件的类型
                if (topics[topic]) {
                    var currentTopic = topics[topic],
                        args = args || {};

                    for (var i = 0, j = currentTopic.length; i < j; i++) {
                        currentTopic[i].call($, args);
                    }
                }
            };

            //执行选择的配置 dease64
            $.subscribe = function (topic, callback) {
                if (!topics[topic]) {
                    topics[topic] = [];
                }
                topics[topic].push(callback);
                return {
                    "topic": topic,
                    "callback": callback
                };
            };

        })(jQuery);
    </script>
    <script type="text/javascript" src="assets/js/jSignature.min.noconflict.js"></script>
    <script type="text/javascript">

        (function ($) {

            $(document).ready(function () {

                // This is the part where jSignature is initialized.
                //初始化画板
                var $sigdiv = $("#signature").jSignature({
                    'UndoButton': true
                })
                $tools = $('#tools')
                pubsubprefix = 'jSignature.demo.'

                $('<input type="button" value="確認签名" class="btnOCR"/>').bind('click', function (e) {
                    //data >>> dease64
                    var data = $sigdiv.jSignature('getData', "image")
                    //使用插件的类型("image/png;base64"/formatchanged重置)
                    $.publish(pubsubprefix + data[0], data);

                }).appendTo($tools)
                //$('<input type="button" value="重置">').bind('click', function (e) {
                // document.getElementById("MainContent_signatureImage").value = '';
                //    $sigdiv.jSignature('reset')
                //}).appendTo($tools)
                $.subscribe(pubsubprefix + 'image/png;base64', function (data) {
                    // console.log("signatureImage >>", 'data:' + data[0] + ',' + data[1]);
                    document.getElementById("MainContent_signatureImage").value = 'data:' + data[0] + ',' + data[1];
                    onclickOCR(6);
                });
            });

        })(jQuery)

    </script>
    <style>
        * {
            margin: 0px;
            padding: 0px;
        }

        .mian {
        }

        .app {
            width: 100VW;
            /*height: 100vh;*/
        }

        .herad {
            width: 100%;
            height: 200px;
            overflow: hidden;
            box-shadow: 3px 3px 12px rgba(0, 148, 255,0.2);
        }

        .herad-image {
            width: 100%;
        }

        .app-center {
            /*background: #aeeaff;*/
            box-sizing: border-box;
            height: 100%;
            /*height: calc(100vh - 200px);*/
        }

        .appBox {
            width: 750px;
            height: 100%;
            padding: 30px;
            position:relative;
            box-sizing: border-box;
            box-shadow: 3px 3px 12px rgba(0, 148, 255,0.2);
            background: radial-gradient(100% 100% ellipse, transparent, #FFFFFF 20%, #aeeaff 98%);
        }

       /* .cropper-drag-box {
            width: 100% !important;
        }

        .cropper-container {
            width: 100% !important;
        }*/

        .col-sm-6 {
            height: 200px !important;
        }

        .autographImg {
            width: 150px;
            height: 60px;
        }

        .zheng {
            width: 300px;
            position:relative;
        }

        .signatureImage-box {
            max-width: 368px;
            width: calc(100% - 2px)
        }

        #signature {
            max-width: 368px !important;
            width: 100% !important;
            height: 202px !important;
            box-sizing: border-box;
            border: 1px solid rgba(0,0,0,1);
        }



        .jSignature {
            background-color: rgba(255, 255, 255,1) !important;
            max-width: 368px !important;
            width: 100% !important;
            height: 200px !important;
            box-sizing: border-box;
        }

        @media only screen and (min-width: 100px) and (max-width: 900px) {
            .res {
                display: none;
            }
        }

        .userlabel {
            width: 90px;
        }

        .mT20 {
            margin-top: 20px!important;
        }

        .btnOCR {
            margin-top: 5px;
            background: rgba(0, 185, 255,1);
            padding: 5px 15px;
            border-radius: 60px;
            border: 0px;
            color: #ffffff;
        }

        .labelInput {
            margin-top: 5px;
            height: 25px;
        }

        .labelInput .Input {
            border-radius: 5px;
            height: 100%;
            border: 1px solid rgba(0, 185, 255,0.5);
        }

        .labelInput select {
            border-radius: 5px;
            height: 100%;
            width:150px;
            border: 1px solid rgba(0, 185, 255,0.5);
        }

        #btnRevoke {
            background: #cccccc;
            padding: 5px 15px;
            border-radius: 60px;
            border: 0px;
            color: #ffffff;
            right: 0px;
        }
        /*.head-img{
            text-align: center;
        }

        #img-upload{
            display: none;
        }*/
        .imageBox{
            position:relative;
        }
        .zhengBox .title {
            margin-top: 20px;
            margin-bottom: 10px;
        }
        .zhengimage {
            width:300px;
             height: 200px;
        }
        .container {
            
             border-radius:10px;
             box-shadow: 3px 3px 12px rgba(0, 148, 255,0.2);
             background:rgb(232, 242, 252);
        }
        .rotateFn {
             position:absolute;
             bottom: 0px;
             z-index:1;
             width: 100%;
        }
         
    </style>
</asp:Content>
