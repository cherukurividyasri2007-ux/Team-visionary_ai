/* =====================================================
   VISIONARY AI
   Main JavaScript
===================================================== */


/* ================= PAGE NAVIGATION ================= */

const navItems = document.querySelectorAll(".nav-item");
const pages = document.querySelectorAll(".page");

const pageData = {

    dashboard: {
        title: "Dashboard",
        subtitle: "Welcome back! Here's what's happening with your campaigns."
    },

    discovery: {
        title: "Creator Discovery",
        subtitle: "Find creators based on niche, location and audience."
    },

    verification: {
        title: "License Verification",
        subtitle: "Verify creator identity, license and campaign eligibility."
    },

    brief: {
        title: "AI Brief Builder",
        subtitle: "Turn your campaign idea into a professional creator brief."
    },

    match: {
        title: "Smart Creator Match",
        subtitle: "AI-powered recommendations based on your campaign."
    },

    pipeline: {
        title: "Campaign Pipeline",
        subtitle: "Manage campaigns from creator selection to final approval."
    },

    shortlist: {
        title: "My Shortlist",
        subtitle: "Your saved creator recommendations."
    },

    settings: {
        title: "Settings",
        subtitle: "Manage your Visionary AI workspace."
    }

};


navItems.forEach(button => {

    button.addEventListener("click", () => {

        const page = button.dataset.page;

        showPage(page);

    });

});


function showPage(pageName) {

    pages.forEach(page => {
        page.classList.remove("active-page");
    });

    navItems.forEach(item => {
        item.classList.remove("active");
    });

    const targetPage = document.getElementById(pageName);

    if (targetPage) {
        targetPage.classList.add("active-page");
    }

    const activeNav = document.querySelector(
        `.nav-item[data-page="${pageName}"]`
    );

    if (activeNav) {
        activeNav.classList.add("active");
    }

    if (pageData[pageName]) {

        document.getElementById("pageTitle").textContent =
            pageData[pageName].title;

        document.getElementById("pageSubtitle").textContent =
            pageData[pageName].subtitle;

    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    if (pageName === "shortlist") {
        renderShortlist();
    }

}


function openBriefPage() {
    showPage("brief");
}


/* ================= CREATOR SEARCH ================= */

function filterCreators() {

    const searchInput =
        document.getElementById("creatorSearch")
        .value
        .toLowerCase();

    const category =
        document.getElementById("categoryFilter").value;

    const location =
        document.getElementById("locationFilter").value;

    const cards =
        document.querySelectorAll(".discovery-card");


    cards.forEach(card => {

        const name =
            card.dataset.name.toLowerCase();

        const cardCategory =
            card.dataset.category;

        const cardLocation =
            card.dataset.location;

        const searchMatch =
            name.includes(searchInput);

        const categoryMatch =
            category === "all" ||
            cardCategory === category;

        const locationMatch =
            location === "all" ||
            cardLocation === location;

        if (
            searchMatch &&
            categoryMatch &&
            locationMatch
        ) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}


/* ================= CREATOR PROFILE ================= */

const creatorData = {

    "Ananya Rao": {

        image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=700&q=80",

        category: "Traditional Fashion Creator",

        location: "Hyderabad",

        followers: "128K",

        engagement: "8.7%",

        rating: "4.9"

    },

    "Meghana Devi": {

        image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=700&q=80",

        category: "Jewellery & Lifestyle Creator",

        location: "Vijayawada",

        followers: "92K",

        engagement: "7.9%",

        rating: "4.8"

    },

    "Sravani Reddy": {

        image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=700&q=80",

        category: "Indian Lifestyle Creator",

        location: "Guntur",

        followers: "76K",

        engagement: "9.1%",

        rating: "4.9"

    },

    "Harika Srinivas": {

        image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=700&q=80",

        category: "Traditional Fashion Creator",

        location: "Chennai",

        followers: "64K",

        engagement: "7.4%",

        rating: "4.7"

    }

};


function viewCreator(name) {

    const creator = creatorData[name];

    if (!creator) return;

    const modalContent =
        document.getElementById("creatorModalContent");

    modalContent.innerHTML = `

        <img
            class="creator-modal-image"
            src="${creator.image}"
        >

        <div class="creator-modal-content">

            <h2>
                ${name}
                <span class="verified">✓</span>
            </h2>

            <p>
                ${creator.category} • ${creator.location}
            </p>

            <div class="profile-stats">

                <div class="profile-stat">
                    <strong>${creator.followers}</strong>
                    <span>Followers</span>
                </div>

                <div class="profile-stat">
                    <strong>${creator.engagement}</strong>
                    <span>Engagement</span>
                </div>

                <div class="profile-stat">
                    <strong>${creator.rating}</strong>
                    <span>Rating</span>
                </div>

            </div>

            <br>

            <div class="brief-result">

                <h4>🛡️ License Status</h4>

                <p>
                    Verified creator license. Commercial
                    campaign participation enabled.
                </p>

            </div>

            <div class="brief-result">

                <h4>🎯 Best Campaign Fit</h4>

                <p>
                    Traditional festivals, silk sarees,
                    jewellery, lifestyle and regional culture.
                </p>

            </div>

            <button
                class="primary-btn"
                onclick="toggleShortlist('${name}')"
            >
                ❤️ Add to Shortlist
            </button>

        </div>

    `;

    document
        .getElementById("creatorModal")
        .classList.add("show");

}


function closeModal(id) {

    document
        .getElementById(id)
        .classList.remove("show");

}


/* ================= SHORTLIST ================= */

let shortlist =
    JSON.parse(
        localStorage.getItem("visionaryShortlist")
    ) || [];


function toggleShortlist(name) {

    if (shortlist.includes(name)) {

        shortlist =
            shortlist.filter(
                creator => creator !== name
            );

        showToast(
            `${name} removed from shortlist`
        );

    } else {

        shortlist.push(name);

        showToast(
            `${name} added to shortlist ❤️`
        );

    }

    localStorage.setItem(
        "visionaryShortlist",
        JSON.stringify(shortlist)
    );

    renderShortlist();

}


function renderShortlist() {

    const container =
        document.getElementById(
            "shortlistContainer"
        );

    if (!container) return;


    if (shortlist.length === 0) {

        container.innerHTML = `

            <div class="empty-state">

                <div>❤️</div>

                <h3>No creators shortlisted yet</h3>

                <p>
                    Go to Creator Discovery and
                    add creators to your shortlist.
                </p>

                <button
                    class="primary-btn"
                    onclick="showPage('discovery')"
                >
                    Discover Creators
                </button>

            </div>

        `;

        return;

    }


    container.innerHTML = `

        <div class="shortlist-grid">

            ${shortlist.map(name => {

                const creator =
                    creatorData[name];

                return `

                    <div class="discovery-card">

                        <img src="${creator.image}">

                        <div class="discovery-content">

                            <div class="creator-name">

                                <strong>
                                    ${name}
                                </strong>

                                <span class="verified">
                                    ✓
                                </span>

                            </div>

                            <p>
                                ${creator.category}
                            </p>

                            <div class="creator-meta">

                                <span>
                                    📍 ${creator.location}
                                </span>

                                <span>
                                    👥 ${creator.followers}
                                </span>

                            </div>

                            <div class="card-actions">

                                <button
                                    class="secondary-btn"
                                    onclick="viewCreator('${name}')"
                                >
                                    View Profile
                                </button>

                                <button
                                    class="heart-btn"
                                    onclick="toggleShortlist('${name}')"
                                >
                                    ♥
                                </button>

                            </div>

                        </div>

                    </div>

                `;

            }).join("")}

        </div>

    `;

}


/* ================= VOICE TO BRIEF ================= */

let recognition = null;
let isListening = false;


function startVoice() {

    const SpeechRecognition =
        window.SpeechRecognition ||
        window.webkitSpeechRecognition;


    if (!SpeechRecognition) {

        showToast(
            "Voice recognition is not supported in this browser."
        );

        return;

    }


    if (isListening) {

        recognition.stop();

        return;

    }


    recognition =
        new SpeechRecognition();

    recognition.lang = "en-IN";

    recognition.continuous = false;

    recognition.interimResults = false;


    const voiceButton =
        document.getElementById(
            "voiceButton"
        );

    const voiceStatus =
        document.getElementById(
            "voiceStatus"
        );


    recognition.onstart = () => {

        isListening = true;

        voiceButton.classList.add(
            "listening"
        );

        voiceButton.innerHTML =
            "🔴 Listening... Speak now";

        voiceStatus.textContent =
            "I'm listening to your campaign idea...";

    };


    recognition.onresult = event => {

        const transcript =
            event.results[0][0].transcript;


        document.getElementById(
            "campaignIdea"
        ).value = transcript;


        voiceStatus.textContent =
            "Voice captured successfully!";


        showToast(
            "Voice campaign idea captured 🎙️"
        );

    };


    recognition.onerror = () => {

        voiceStatus.textContent =
            "Unable to capture voice. Try again.";

    };


    recognition.onend = () => {

        isListening = false;

        voiceButton.classList.remove(
            "listening"
        );

        voiceButton.innerHTML =
            "🎙️ Start Speaking";

    };


    recognition.start();

}


/* ================= AI BRIEF GENERATOR ================= */

function generateBrief() {

    const idea =
        document.getElementById(
            "campaignIdea"
        ).value.trim();


    if (!idea) {

        showToast(
            "Please enter or speak a campaign idea."
        );

        return;

    }


    const output =
        document.getElementById(
            "briefOutput"
        );


    output.innerHTML = `

        <div class="brief-result">

            <h4>🎯 Campaign Objective</h4>

            <p>
                Create a high-quality traditional campaign
                that increases brand awareness, engagement
                and creator-driven reach.
            </p>

        </div>

        <div class="brief-result">

            <h4>📝 Campaign Concept</h4>

            <p>
                ${idea}
            </p>

        </div>

        <div class="brief-result">

            <h4>👥 Target Audience</h4>

            <p>
                Young Indian consumers interested in
                traditional fashion, culture, festivals
                and premium lifestyle products.
            </p>

        </div>

        <div class="brief-result">

            <h4>🎥 Content Requirements</h4>

            <p>
                1 short-form video, 2 Instagram stories,
                traditional visual styling and clear
                brand/product visibility.
            </p>

        </div>

        <div class="brief-result">

            <h4>🎨 Creative Direction</h4>

            <p>
                Use elegant traditional styling with
                silk sarees, jewellery, warm festive
                environments and cultural elements.
            </p>

        </div>

        <div class="brief-result">

            <h4>📅 Suggested Timeline</h4>

            <p>
                Creator selection → 2 days<br>
                Content production → 5 days<br>
                Brand review → 2 days<br>
                Campaign launch → 1 day
            </p>

        </div>

    `;


    showToast(
        "Professional brief generated ✨"
    );

}


/* ================= REVISION CHAT ================= */

function openRevision() {

    document
        .getElementById("revisionModal")
        .classList.add("show");

}


function sendRevisionMessage() {

    const input =
        document.getElementById(
            "revisionMessage"
        );

    const message =
        input.value.trim();


    if (!message) return;


    const chat =
        document.querySelector(
            ".chat-area"
        );


    const messageElement =
        document.createElement("div");


    messageElement.className =
        "chat-message sent";


    messageElement.innerHTML = `

        <strong>Brand</strong>

        <p>
            ${message}
        </p>

    `;


    chat.appendChild(
        messageElement
    );


    input.value = "";

    chat.scrollTop =
        chat.scrollHeight;

    showToast(
        "Message sent to creator"
    );

}


/* ================= TOAST ================= */

function showToast(message) {

    const toast =
        document.getElementById("toast");


    toast.textContent = message;

    toast.classList.add("show");


    setTimeout(() => {

        toast.classList.remove("show");

    }, 2500);

}


/* ================= MODAL CLICK OUTSIDE ================= */

window.addEventListener(
    "click",
    event => {

        if (
            event.target.classList.contains(
                "modal"
            )
        ) {

            event.target.classList.remove(
                "show"
            );

        }

    }
);


/* ================= INITIAL LOAD ================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        renderShortlist();

    }
);