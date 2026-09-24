let destinations = [
{ name:"Maldives", price:2400, img:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e", map:"https://www.google.com/maps?q=Maldives&output=embed" },
{ name:"Paris", price:2200, img:"https://images.unsplash.com/photo-1502602898657-3e91760cbb34", map:"https://www.google.com/maps?q=Paris&output=embed" },
{ name:"Swiss Alps", price:3000, img:"https://images.unsplash.com/photo-1501785888041-af3ef285b470", map:"https://www.google.com/maps?q=Swiss Alps&output=embed" },
{ name:"Goa", price:800, img:"https://images.unsplash.com/photo-1512343879784-a960bf40e7f2", map:"https://www.google.com/maps?q=Goa&output=embed" },
{ name:"Manali", price:700, img:"https://images.unsplash.com/photo-1609947017136-9daf32a5eb16", map:"https://www.google.com/maps?q=Manali&output=embed" },
{ name:"Ooty", price:600, img:"https://images.unsplash.com/photo-1593693397690-362cb9666fc2", map:"https://www.google.com/maps?q=Ooty&output=embed" },
{ name:"Ladakh", price:1200, img:"https://images.unsplash.com/photo-1587474260584-136574528ed5", map:"https://www.google.com/maps?q=Ladakh&output=embed" },
{ name:"Dubai", price:2000, img:"https://images.unsplash.com/photo-1512453979798-5ea266f8880c", map:"https://www.google.com/maps?q=Dubai&output=embed" },
{ name:"Singapore", price:1700, img:"https://images.unsplash.com/photo-1508964942454-1a56651d54ac", map:"https://www.google.com/maps?q=Singapore&output=embed" },
{ name:"Tokyo", price:2100, img:"https://images.unsplash.com/photo-1505069446780-4ef442b5207f", map:"https://www.google.com/maps?q=Tokyo&output=embed" },
{ name:"Bali", price:1500, img:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e", map:"https://www.google.com/maps?q=Bali&output=embed" },
{ name:"Rome", price:2100, img:"https://images.unsplash.com/photo-1529260830199-42c24126f198", map:"https://www.google.com/maps?q=Rome&output=embed" },
{ name:"London", price:2400, img:"https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=600&q=80", map:"https://www.google.com/maps?q=London&output=embed" },
{ name:"Dubai", price:2000, img:"https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80", map:"https://www.google.com/maps?q=Dubai&output=embed" },
{ name:"Rome", price:2100, img:"https://images.unsplash.com/photo-1529260830199-42c24126f198?auto=format&fit=crop&w=600&q=80", map:"https://www.google.com/maps?q=Rome&output=embed" },
{ name:"Istanbul", price:1700, img:"https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=600&q=80", map:"https://www.google.com/maps?q=Istanbul&output=embed" },
{ name:"Bangkok", price:1300, img:"https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=600&q=80", map:"https://www.google.com/maps?q=Bangkok&output=embed" },
{ name:"Mumbai", price:900, img:"https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=600&q=80", map:"https://www.google.com/maps?q=Mumbai&output=embed" },
{ name:"Santorini", price:2600, img:"https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=600&q=80", map:"https://www.google.com/maps?q=Santorini&output=embed" },
{ name:"San Francisco", price:2400, img:"https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=600&q=80", map:"https://www.google.com/maps?q=San Francisco&output=embed" }
]

function showPage(id){
document.querySelectorAll("section").forEach(s=>s.classList.remove("active"));
document.getElementById(id).classList.add("active");
if(id==="booking") loadBookings();
if(id==="admin") showAdminList();
if(id==="wishlist") loadWishlist();
}

function renderDestinations(list = destinations){
document.getElementById("destContainer").innerHTML = list.map(d=>`
<div class="card">
<img src="${d.img}">
<div class="card-body">
<h3>${d.name}</h3>
<p>$${d.price}</p>
<input type="text" placeholder="Review" id="review${d.name}">
<select id="rating${d.name}">
<option>5</option><option>4</option><option>3</option><option>2</option><option>1</option>
</select>
<button class="nav-btn" onclick="addToWishlist('${d.name}')">❤️ Wishlist</button>
<button class="nav-btn" onclick="book('${d.name}')">Book</button>
</div>
</div>
`).join("");
}

function searchDest(val){
let filtered = destinations.filter(d => d.name.toLowerCase().includes(val.toLowerCase()));
renderDestinations(filtered);
}
function toggleMenu(){
    let menu = document.getElementById("dropdownMenu");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

function recommendPlace(){
let place = document.querySelector('input[name="place"]:checked');
if(!place){ alert("Select Mood"); return; }
let filtered = [];
if(place.value==="Beach") filtered = destinations.filter(d=>["Maldives","Goa","Bali"].includes(d.name));
else if(place.value==="Mountains") filtered = destinations.filter(d=>["Swiss Alps","Manali","Ladakh","Ooty"].includes(d.name));
else filtered = destinations.filter(d=>["Paris","New York","Tokyo","Dubai","Singapore","Rome","Barcelona","Sydney"].includes(d.name));
renderDestinations(filtered);
showPage("destinations");
}

function calculateBudget(){
let budget=document.getElementById("budgetAmount").value;
let days=document.getElementById("days").value;
let people=document.getElementById("people").value;
document.getElementById("budgetResult").innerHTML="Per Day: $"+(budget/days).toFixed(2)+"<br>Per Person: $"+(budget/people).toFixed(2);
}

function signup(){
let user=document.getElementById("username").value;
let pass=document.getElementById("password").value;
localStorage.setItem("user_"+user,pass);
alert("Account created");
}

function login(){
let user=document.getElementById("username").value;
let pass=document.getElementById("password").value;
let storedPass=localStorage.getItem("user_"+user);
if(storedPass===pass){
localStorage.setItem("user",user);
alert("Login successful");
showPage("home");
}else alert("Invalid credentials");
}

function book(place){
localStorage.setItem("selectedPlace",place);
let dest=destinations.find(d=>d.name===place);
document.getElementById("mapFrame").src=dest.map;
showPage("map");
setTimeout(()=>showPage("payment"),2000);
}

function payNow(){
let place=localStorage.getItem("selectedPlace");
let date=document.getElementById("travelDate").value;
let people=document.getElementById("peopleCount").value;
let bookings=JSON.parse(localStorage.getItem("bookings"))||[];
bookings.push({place,date,people});
localStorage.setItem("bookings",JSON.stringify(bookings));
document.getElementById("popup").style.display="flex";
}

function closePopup(){
document.getElementById("popup").style.display="none";
showPage("booking");
loadBookings();
}

function loadBookings(){
let bookings=JSON.parse(localStorage.getItem("bookings"))||[];
document.getElementById("bookingList").innerHTML=bookings.map((b,i)=>`
<div class="booking-item">
<span>${b.place} | ${b.date} | People: ${b.people}</span>
<button onclick="downloadTicket('${b.place}','${b.date}','${b.people}')">Ticket</button>
<button onclick="removeBooking(${i})">Cancel</button>
</div>
`).join("");
}

function removeBooking(index){
let bookings=JSON.parse(localStorage.getItem("bookings"))||[];
bookings.splice(index,1);
localStorage.setItem("bookings",JSON.stringify(bookings));
loadBookings();
}

function downloadTicket(place,date,people){
let content=`Travel Ticket\nDestination: ${place}\nDate: ${date}\nPeople: ${people}`;
let blob=new Blob([content],{type:"text/plain"});
let a=document.createElement("a");
a.href=URL.createObjectURL(blob);
a.download="ticket.txt";
a.click();
}


function addDestination(){
let name=document.getElementById("adminName").value;
let price=document.getElementById("adminPrice").value;
let img=document.getElementById("adminImg").value;
destinations.push({name,price,img,map:"https://www.google.com/maps?q="+name+"&output=embed"});
renderDestinations();
showAdminList();
}

function showAdminList(){
document.getElementById("adminList").innerHTML=destinations.map((d,i)=>`
<div class="booking-item">
${d.name} - $${d.price}
<button onclick="deleteDestination(${i})">Delete</button>
</div>
`).join("");
}

function deleteDestination(index){
destinations.splice(index,1);
renderDestinations();
showAdminList();
}

function saveProfile(){
let name=document.getElementById("profileName").value;
let email=document.getElementById("profileEmail").value;
localStorage.setItem("profile",JSON.stringify({name,email}));
alert("Profile Saved");
}

function logout(){
localStorage.removeItem("user");
alert("Logged out");
location.reload();
}

renderDestinations();
function openImage(src){
    document.getElementById("imgPopup").style.display="flex";
    document.getElementById("popupImg").src = src;
}

document.getElementById("imgPopup").onclick = function(){
    this.style.display = "none";
}

// ===== AI CHAT FUNCTIONS =====

// Toggle chat
function toggleChat(){
    let chat = document.getElementById("aiChat");
    chat.style.display = (chat.style.display === "block") ? "none" : "block";
}

// Add message
function addMessage(text, type){
    let chatBox = document.getElementById("chatBox");
    let div = document.createElement("div");
    div.className = "message " + type;
    div.innerText = text;
    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Voice input
function startListening(){

    // Check support
    if (!('webkitSpeechRecognition' in window)) {
        alert("Use Google Chrome for voice feature");
        return;
    }

    const recognition = new webkitSpeechRecognition();

    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.start();

    recognition.onstart = function(){
        addMessage("🎤 Listening...", "bot");
    };

    recognition.onresult = function(event){
        let userText = event.results[0][0].transcript;
        addMessage(userText, "user");

        let reply = getAIResponse(userText);

        setTimeout(()=>{
            addMessage(reply, "bot");
            speak(reply);
        }, 500);
    };

    recognition.onerror = function(event){
        console.log("Error:", event.error);

        if(event.error === "not-allowed"){
            alert("Allow microphone access and refresh 🔒");
        }
        else if(event.error === "no-speech"){
            alert("No speech detected 🎤");
        }
        else if(event.error === "audio-capture"){
            alert("No microphone found");
        }
        else{
            alert("Error: " + event.error);
        }
    };
}

// AI logic
function getAIResponse(input){
    input = input.toLowerCase();

    if(input.includes("beach")) return "I recommend Goa or Maldives 🌴";
    if(input.includes("mountain")) return "Try Manali or Ladakh 🏔️";
    if(input.includes("city")) return "Explore Paris, Dubai or Tokyo 🏙️";
    if(input.includes("budget")) return "Use the Budget Planner section 💰";
    if(input.includes("hello")) return "Hi! I'm your travel assistant 😊";

    return "Tell me your mood and I’ll suggest a perfect destination ✈️";
}

// Voice output
function speak(text){
    let speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-US";
    window.speechSynthesis.speak(speech);
}
// Add to wishlist
function addToWishlist(place){
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    if(!wishlist.includes(place)){
        wishlist.push(place);
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        alert(place + " added to wishlist ❤️");
    } else {
        alert("Already in wishlist");
    }
}

// Load wishlist
function loadWishlist(){
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    let container = document.getElementById("wishlistContainer");

    container.innerHTML = wishlist.map((place, i)=>`
        <div class="booking-item">
            ${place}
            <button onclick="removeWishlist(${i})">Remove</button>
            <button onclick="book('${place}')">Book</button>
        </div>
    `).join("");
}

// Remove item
function removeWishlist(index){
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    wishlist.splice(index,1);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    loadWishlist();
}