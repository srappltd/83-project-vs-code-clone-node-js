
MenuOpen();
FileCreate();
OutPuts();
UpdateFile();
MainCenterLeft();
TextArea();




function OutPuts(){
    var outputs = document.querySelector("#output");
    var txt1 = document.querySelector(".txt1").value;
    var txt2 = document.querySelector(".txt2").value;
    outputs.innerHTML = `${txt1}`;
    flag = 0
    document.querySelector(".live-gps").addEventListener("click",()=>{
        if(flag == 0){
            // alert("df")

            outputs.style.display = "block";
            // window.open(txt1)
            flag = 1;
        }else{
            outputs.style.display = "none";
            flag = 0;
        }
    })
}

function TextArea(){
    var textarea = document.querySelector(".textarea textarea");
    var count = [];
    counter = 1;
    textarea.addEventListener("keypress",(event)=>{
        let keyCode = event.keyCode ? event.keyCode : event.which;
    
         // 13 points the enter key
        if(keyCode === 13) {
            counter++;
            document.querySelector(".num").innerHTML += `<a>${counter}</a>`
            count.push(counter);
            // window.open("https://google.com","_blank");
        }
    })
    document.addEventListener("keydown",(event)=>{
        if (event.keyCode == 8) {
            count.pop();
                // document.querySelector(".num").innerHTML = `<a>${count}</a>`
            }
    });
}

function FileCreate(){
    var fileCreate = document.querySelector(".ri-file-add-line");
    var folderCreate = document.querySelector(".toggle .expo-create .ri-folder-add-line");
    var inp = document.querySelector(".inp");
    var folderIn = document.querySelector(".folderIn");
    flag = 0;
    flag1 = 0;
    
    fileCreate.addEventListener("click",()=>{
        if(flag == 0){
            inp.style.display = "block";
            folderIn.style.display = "none";
            flag = 1;
        }else{
            inp.style.display = "none";
            flag = 0;
        }
    })
    folderCreate.addEventListener("click",()=>{
        if(flag1 == 0){
            folderIn.style.display = "block";
            inp.style.display = "none";
            flag1 = 1;
        }else{
            folderIn.style.display = "none";
            flag1 = 0;
        }
    })
}

function UpdateFile(){
    document.querySelectorAll(".expo-item").forEach(elem=>{
        elem.querySelector(".ri-edit-fill").addEventListener('click',()=>{
            elem.querySelector(".a-input form").style.display = "block";
        });
    })
}

function MainCenterLeft(){
    var toggle = document.querySelector(".toggle");
    var textarea = document.querySelector(".textarea");
    flag = 0;

    document.querySelector(".ri-file-line").addEventListener("click",()=>{
        if(flag == 0){
            toggle.style.display = "none";
            textarea.style.width = "98%";
            flag = 1;
        }else{
            toggle.style.display = "block";
            textarea.style.width = "calc(100% - 49vh)";
            flag = 0;
        }
    });
}

function MenuOpen(){
    var fileMenu = document.querySelector("#file-menu");
    var editMenu = document.querySelector("#edit-menu");
    var selectionMenu = document.querySelector("#selection-menu");
    var viewMenu = document.querySelector("#view-menu");
    flag = 0;
    flag1 = 0;
    flag2 = 0;
    flag3 = 0;
    document.querySelector(".file-a").addEventListener("click",()=>{
        if(flag == 0){
            viewMenu.style.top = "-100vh";
            fileMenu.style.top = "5.5vh";
            editMenu.style.top = "-100vh";
            flag = 1;
        }else{
            viewMenu.style.top = "-100vh";
            fileMenu.style.top = "-100vh";
            editMenu.style.top = "-100vh";
            flag = 0;
        }
    });
    document.querySelector(".edit-a").addEventListener("click",()=>{
        if(flag1 == 0){
            viewMenu.style.top = "-100vh";
            editMenu.style.top = "5.5vh";
            fileMenu.style.top = "-100vh";
            selectionMenu.style.top = "-100vh";
            flag1 = 1;
        }else{
            viewMenu.style.top = "-100vh";
            editMenu.style.top = "-100vh";
            fileMenu.style.top = "-100vh";
            selectionMenu.style.top = "-100vh";
            flag1 = 0;
        }
    });
    document.querySelector(".selection-a").addEventListener("click",()=>{
        if(flag2 == 0){
            viewMenu.style.top = "-100vh";
            selectionMenu.style.top = "5.5vh";
            editMenu.style.top = "-100vh";
            fileMenu.style.top = "-100vh";
            flag2 = 1;
        }else{
            viewMenu.style.top = "-100vh";
            selectionMenu.style.top = "-100vh";
            editMenu.style.top = "-100vh";
            fileMenu.style.top = "-100vh";
            flag2 = 0;
        }
    });
    document.querySelector(".view-a").addEventListener("click",()=>{
        if(flag3 == 0){
            viewMenu.style.top = "5.5vh";
            selectionMenu.style.top = "-100vh";
            editMenu.style.top = "-100vh";
            fileMenu.style.top = "-100vh";
            flag3 = 1;
        }else{
            viewMenu.style.top = "-100vh";
            selectionMenu.style.top = "-100vh";
            editMenu.style.top = "-100vh";
            fileMenu.style.top = "-100vh";
            flag3 = 0;
        }
    });
    document.querySelector(".go-a").addEventListener("click",()=>{
        if(flag3 == 0){
            viewMenu.style.top = "5.5vh";
            selectionMenu.style.top = "-100vh";
            editMenu.style.top = "-100vh";
            fileMenu.style.top = "-100vh";
            flag3 = 1;
        }else{
            viewMenu.style.top = "-100vh";
            selectionMenu.style.top = "-100vh";
            editMenu.style.top = "-100vh";
            fileMenu.style.top = "-100vh";
            flag3 = 0;
        }
    });
    document.querySelector(".textarea").addEventListener("click",()=>{
        viewMenu.style.top = "-100vh";
        fileMenu.style.top = "-100vh";
        editMenu.style.top = "-100vh";
        selectionMenu.style.top = "-100vh";
        flag = 0;
        flag1 = 0;
        flag2 = 0;
        flag3 = 0;
    })
}
















