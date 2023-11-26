---
layout: 0-generic
---
<head>
<style>
        body {
            font-family: Arial;
        }
        .tab {
            overflow: hidden;
            border: 1px solid #ccc;
            background-color: #f1f1f1;
        }
        .tab button {
            background-color: inherit;
            float: left;
            border: none;
            outline: none;
            cursor: pointer;
            padding: 14px 16px;
            transition: 0.3s;
            font-size: 17px;
        }
        .tab button.active {
            border-bottom: 3px solid dodgerblue;
        }
        .tabcontent {
            display: none;
            padding: 6px 12px;
            border: 1px solid #ccc;
            border-top: none;
        }
    </style>
         <script async src="https://hypothes.is/embed.js"></script>
</head>

     <div class="tab">
        <button class="tablinks" onclick="openTab(event, 'doutrina')" id="defaultOpen">doutrina.org</button>
        <button class="tablinks" onclick="openTab(event, 'original')" style="float: right;">original</button>
    </div>

    <div id="doutrina" class="tabcontent">
        <h3>Tab One</h3>
        <p>Lorem ipsum</p>
    </div>

    <div id="original" class="tabcontent">
        <h3>Tab Two</h3>
        <p>Lorem ipsum</p>
    </div>

