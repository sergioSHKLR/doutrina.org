---
layout: 0-generic
---

<style>
        body {
            font-family: Arial;
        }

        /* Style the tab */
        .tab {
            overflow: hidden;
            border: 1px solid #ccc;
            background-color: #f1f1f1;
        }

        /* Style the buttons inside the tab */
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


        /* Create an active/current tablink class */
        .tab button.active {
            border-bottom: 3px solid dodgerblue;
        }

        /* Style the tab content */
        .tabcontent {
            display: none;
            padding: 6px 12px;
            border: 1px solid #ccc;
            border-top: none;
        }
    </style>

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

     <script async src="https://hypothes.is/embed.js"></script>
