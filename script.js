function sendMessage(){

    let input = document.getElementById("userInput");
    let chat = document.getElementById("chatBox");

    let text = input.value;

    if(text.trim() === ""){
        return;
    }

    chat.innerHTML += `
    <div class="message user">
    ${text}
    </div>
    `;


    setTimeout(()=>{

        chat.innerHTML += `
        <div class="message ai">
        🐉 دریافت شد. هنوز به مغز اصلی وصل نشدم، ولی آماده‌ام.
        </div>
        `;

        chat.scrollTop = chat.scrollHeight;

    },700);


    input.value="";

}
