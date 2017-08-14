"use strict";

//Setting title bar as the actual app title

const $ = require("jquery");
const {
    remote
} = require("electron");
var win = remote.getCurrentWindow();
var open = require("open");
var applied = false;


$(document).ready(function () {

    //Taskbar functionality

    $("#minimize").click(function () {
        win.minimize();
    });

    $("#maximize").click(function () {
        if (!win.isMaximized()) {
            win.maximize();
        } else {
            win.unmaximize();
        }

    });

    $("#close").click(function () {
        win.close();
    });


    //Process List

    document.getElementById("versions").innerHTML = `
        <li class="list-group-item"><strong>Node:</strong> ${process.versions.node}</li>
        <li class="list-group-item"><strong>Electron:</strong> ${process.versions.electron}</li>
        <li class="list-group-item"><strong>Chromium:</strong> ${process.versions.chrome}</li>
        <li class="list-group-item"><strong>Ares:</strong> ${process.versions.ares}</li>
        <li class="list-group-item"><strong>HTTP Parser:</strong> ${process.versions.http_parser}</li>
        <li class="list-group-item"><strong>Modules:</strong> ${process.versions.modules}</li>
        <li class="list-group-item"><strong>OpenSSL:</strong> ${process.versions.openssl}</li>
        <li class="list-group-item"><strong>UV:</strong> ${process.versions.uv}</li>
        <li class="list-group-item"><strong>V8:</strong> ${process.versions.v8}</li>
        <li class="list-group-item"><strong>ZLib:</strong> ${process.versions.zlib}</li>
    `

    document.getElementById("directories").innerHTML = `
        <li class="list-group-item"><strong>Home Drive</strong>:</strong> ${process.env.HOMEDRIVE}</li>
        <li class="list-group-item"><strong>Electron Directory:</strong> ${process.argv0}</li>
        <li class="list-group-item"><strong>Shell:</strong> ${process.env.ComSpec}</li>
        <li class="list-group-item"><strong>GTK:</strong> ${process.env.GTK_BASEPATH}</li>
        <li class="list-group-item"><strong>Node:</strong> ${process.env.Node}</li>
        <li class="list-group-item"><strong>PowerShell:</strong> ${process.env.PSModulePath}</li>
        <li class="list-group-item"><strong>Index:</strong> ${process.mainModule.filename}</li>
        <li class="list-group-item"><strong>Resources:</strong> ${process.resourcesPath}</li>

    `

    document.getElementById("memory").innerHTML = `
        <li class="list-group-item"><strong>Total:</strong> ${Math.round(process.getSystemMemoryInfo().total/1024)}</li>
        <li class="list-group-item"><strong>Free:</strong> ${Math.round(process.getSystemMemoryInfo().free/1024)}</li>
        <li class="list-group-item"><strong>Swap Total:</strong> ${Math.round(process.getSystemMemoryInfo().swapTotal/1024)}</li>
        <li class="list-group-item"><strong>Swap Free:</strong> ${Math.round(process.getSystemMemoryInfo().swapFree/1024)}</li>
    `

    document.getElementById("misc").innerHTML = `
        <li class="list-group-item"><strong>Processor Identifier:</strong> ${process.env.PROCESSOR_IDENTIFIER}</li>
        <li class="list-group-item"><strong>Debug Mode:</strong> ${process.features.debug}</li>
        <li class="list-group-item"><strong>Platform:</strong> ${process.platform}</li>
        <li class="list-group-item"><strong>System Architecture:</strong> ${process.arch}</li>
    `

    $("#refresh").click(function () {
        win.reload();
    });

    $("#github").click(function () {
        open("https://github.com/devyboy")
    });

    $(".dropbtn").mouseover(function () {
        $("#buttonhover").css("background-color", "#444444");
    });

    $(".dropbtn").mouseleave(function () {
        $("#buttonhover").css("background-color", "transparent");
    });
    
    $(".dropdown-content").mouseover(function () {
        $("#buttonhover").css("background-color", "#444444");
    });

    $(".dropdown-content").mouseleave(function () {
        $("#buttonhover").css("background-color", "transparent");
    });

    $(".dropdown").mouseover(function () {
        $("#buttonhover").css("background-color", "#3a3a3a");
    });

    $(".dropdown").mouseleave(function () {
        $("#buttonhover").css("background-color", "transparent");
    });
    
    $("#settings").click(function () {
        $(".modal").css("display", "block");
    });

    $(window).click(function (e) {
        if (e.target.id == "myModal") {
            $("#myModal").css("display", "none");
        }
    });

    $("#changeTheme").click(function () {
        applied = !applied;
    });

    $(".btn-success").click(function () {
        if (applied == true) {
            $("#myModal").css("display", "none");
            $("#bootstrap").attr("href", "https://bootswatch.com/darkly/bootstrap.min.css");
            $(".page-header").css("color", "white");
            $(".list-group").css("color", "white");
            $(".modal-content").css("background-color", "white");
            $(".modal-content").css("background-color", "#222222");
        }
        else {
            $("#myModal").css("display", "none");
            $("#bootstrap").attr("href", "https://bootswatch.com/yeti/bootstrap.min.css");
            $(".page-header").css("color", "black");
            $(".list-group").css("color", "black");
            $(".modal-content").css("background-color", "white");
        }
    });
});