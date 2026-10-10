// =====================================================
// BRANDGUARD AI
// COMPLETE WORKING MVP
// =====================================================


// ================= CREATOR DATA =================

const creators = [

    {
        name: "Ananya AI Studio",

        specialization: "AI Fashion",

        skills: [
            "AI Fashion",
            "Product Ads",
            "Saree Advertising"
        ],

        tools: [
            "Midjourney",
            "Runway",
            "ChatGPT"
        ],

        festivals: [
            "Sankranti",
            "Diwali",
            "Ugadi"
        ],

        rating: 4.9,

        projects: 128,

        match: 92,

        workflow: [
            "Brand Idea & Brief",
            "Prompt Creation - Midjourney",
            "AI Image Generation",
            "Runway Video Generation",
            "Final Editing",
            "Commercial Delivery"
        ],

        license: {
            ownership: true,
            commercialUse: true,
            type: "Commercial License",
            expiry: "31 Dec 2027",
            aiDisclosure: true,
            tracking: true
        }
    },


    {
        name: "VisionCraft AI",

        specialization: "E-commerce",

        skills: [
            "Product Photography",
            "Social Media Ads",
            "Product Visualization"
        ],

        tools: [
            "Stable Diffusion",
            "Adobe Firefly",
            "Canva AI"
        ],

        festivals: [
            "Diwali",
            "Christmas"
        ],

        rating: 4.8,

        projects: 96,

        match: 87,

        workflow: [
            "Product Analysis",
            "Prompt Design",
            "Stable Diffusion Generation",
            "Product Enhancement",
            "Ad Composition",
            "Final Export"
        ],

        license: {
            ownership: true,
            commercialUse: true,
            type: "Commercial License",
            expiry: "15 Aug 2027",
            aiDisclosure: true,
            tracking: true
        }
    },


    {
        name: "PixelVerse Creator",

        specialization: "Video Advertising",

        skills: [
            "AI Video",
            "Cinematic Ads",
            "Social Media Reels"
        ],

        tools: [
            "Runway",
            "Pika",
            "Sora"
        ],

        festivals: [
            "Dussehra",
            "Sankranti"
        ],

        rating: 4.7,

        projects: 84,

        match: 81,

        workflow: [
            "Campaign Concept",
            "Storyboard",
            "Runway Video Generation",
            "Pika Motion Generation",
            "Video Editing",
            "Final Reel"
        ],

        license: {
            ownership: true,
            commercialUse: true,
            type: "Extended Commercial License",
            expiry: "30 Nov 2027",
            aiDisclosure: true,
            tracking: true
        }
    },


    {
        name: "DreamFrame AI",

        specialization: "AI Jewellery",

        skills: [
            "Jewellery Ads",
            "Luxury Branding",
            "Product Ads"
        ],

        tools: [
            "Midjourney",
            "Adobe Firefly",
            "ChatGPT"
        ],

        festivals: [
            "Diwali",
            "Wedding"
        ],

        rating: 4.9,

        projects: 112,

        match: 89,

        workflow: [
            "Luxury Brand Brief",
            "Creative Prompt",
            "Midjourney Generation",
            "Product Enhancement",
            "Ad Composition",
            "Final Campaign"
        ],

        license: {
            ownership: true,
            commercialUse: true,
            type: "Premium Commercial License",
            expiry: "20 Dec 2027",
            aiDisclosure: true,
            tracking: true
        }
    },


    {
        name: "CineAI Studio",

        specialization: "AI Cinematic Content",

        skills: [
            "AI Video",
            "Storytelling",
            "Cinematic Advertising"
        ],

        tools: [
            "Runway",
            "Sora",
            "Pika"
        ],

        festivals: [
            "Christmas",
            "Dussehra",
            "Sankranti"
        ],

        rating: 4.8,

        projects: 103,

        match: 85,

        workflow: [
            "Story Concept",
            "AI Storyboard",
            "Runway Generation",
            "Sora Video Generation",
            "Cinematic Editing",
            "Final Master"
        ],

        license: {
            ownership: true,
            commercialUse: true,
            type: "Commercial Video License",
            expiry: "10 Jan 2028",
            aiDisclosure: true,
            tracking: true
        }
    },


    {
        name: "FoodPixel AI",

        specialization: "AI Food Advertising",

        skills: [
            "Food Photography",
            "Restaurant Ads",
            "Social Media Content"
        ],

        tools: [
            "Midjourney",
            "Stable Diffusion",
            "Canva AI"
        ],

        festivals: [
            "Ugadi",
            "Sankranti",
            "Diwali"
        ],

        rating: 4.6,

        projects: 76,

        match: 79,

        workflow: [
            "Food Product Analysis",
            "Creative Prompt",
            "AI Image Generation",
            "Food Enhancement",
            "Social Media Editing",
            "Final Advertisement"
        ],

        license: {
            ownership: true,
            commercialUse: true,
            type: "Standard Commercial License",
            expiry: "05 Sep 2027",
            aiDisclosure: true,
            tracking: true
        }
    }

];


// ================= GLOBAL VARIABLES =================

let currentBrief = null;

let selectedCreator = null;


// ================= PAGE NAVIGATION =================

function showPage(pageId) {

    const pages = document.querySelectorAll(".page");

    pages.forEach(function(page) {
        page.classList.add("hidden");
    });


    const page = document.getElementById(pageId);

    if (page) {
        page.classList.remove("hidden");
    }


    const navButtons =
        document.querySelectorAll(".nav-btn");


    navButtons.forEach(function(button) {
        button.classList.remove("active");
    });


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// ================= CREATOR DISPLAY =================

function displayCreators(list) {

    const grid =
        document.getElementById("creatorGrid");


    if (!grid) return;


    grid.innerHTML = "";


    if (!list || list.length === 0) {

        grid.innerHTML = `
            <div class="empty-state">
                <h3>No creators found</h3>
                <p>Try another search or festival.</p>
            </div>
        `;

        return;
    }


    list.forEach(function(creator) {

        const index =
            creators.indexOf(creator);


        const card =
            document.createElement("div");


        card.className =
            "creator-card";


        card.innerHTML = `

            <div class="creator-avatar">
                ${creator.name.charAt(0)}
            </div>

            <div class="creator-info">

                <h3>
                    ${creator.name}
                </h3>

                <p class="specialization">
                    ${creator.specialization}
                </p>

                <div class="creator-tags">

                    ${creator.skills
                        .map(function(skill) {
                            return `<span>${skill}</span>`;
                        })
                        .join("")}

                </div>

                <p class="tools">
                    🛠 ${creator.tools.join(" • ")}
                </p>

                <p class="festivals">
                    🇮🇳 ${creator.festivals.join(" • ")}
                </p>

                <div class="creator-stats">

                    <span>
                        ⭐ ${creator.rating}
                    </span>

                    <span>
                        📁 ${creator.projects}
                    </span>

                    <span>
                        🎯 ${creator.match}%
                    </span>

                </div>

                <div class="verification">

                    <span>
                        ✓ Ownership Verified
                    </span>

                    <span>
                        ✓ Commercial Use
                    </span>

                    <span>
                        ✓ AI Disclosure
                    </span>

                </div>

                <button
                    class="primary-btn"
                    onclick="viewCreator(${index})">

                    View Creator

                </button>

            </div>
        `;


        grid.appendChild(card);

    });

}


// ================= SEARCH =================

function searchCreators() {

    const searchElement =
        document.getElementById("creatorSearch");


    const festivalElement =
        document.getElementById("festivalFilter");


    const search =
        searchElement
            ? searchElement.value.toLowerCase().trim()
            : "";


    const festival =
        festivalElement
            ? festivalElement.value
            : "";


    const filtered =
        creators.filter(function(creator) {

            const allText = [

                creator.name,

                creator.specialization,

                ...creator.skills,

                ...creator.tools,

                ...creator.festivals

            ]
            .join(" ")
            .toLowerCase();


            const searchMatch =
                search === "" ||
                allText.includes(search);


            const festivalMatch =
                festival === "" ||
                creator.festivals.includes(festival);


            return searchMatch && festivalMatch;

        });


    displayCreators(filtered);

}


// ================= CREATOR PROFILE =================

function viewCreator(index) {

    const creator =
        creators[index];


    if (!creator) return;


    selectedCreator =
        creator;


    const profile =
        document.getElementById("profileContent");


    if (!profile) return;


    profile.innerHTML = `

        <div class="profile-header">

            <div class="creator-avatar large">
                ${creator.name.charAt(0)}
            </div>

            <div>

                <h2>
                    ${creator.name}
                </h2>

                <p>
                    ${creator.specialization}
                </p>

                <div>
                    ⭐ ${creator.rating}
                    &nbsp; • &nbsp;
                    ${creator.projects}
                    Completed Projects
                </div>

            </div>

        </div>


        <div class="profile-section">

            <h3>Skills</h3>

            <div class="creator-tags">

                ${creator.skills
                    .map(function(skill) {
                        return `<span>${skill}</span>`;
                    })
                    .join("")}

            </div>

        </div>


        <div class="profile-section">

            <h3>AI Tools</h3>

            <p>
                🛠 ${creator.tools.join(" • ")}
            </p>

        </div>


        <div class="profile-section">

            <h3>
                🔄 Workflow Timeline
            </h3>

            <div class="workflow">

                ${creator.workflow
                    .map(function(step, index) {

                        return `

                            <div class="workflow-step">

                                <div class="workflow-number">
                                    ${index + 1}
                                </div>

                                <div>

                                    <strong>
                                        ${step}
                                    </strong>

                                    <p>
                                        Verified workflow step
                                    </p>

                                </div>

                            </div>

                        `;

                    })
                    .join("")}

            </div>

        </div>


        <div class="license-passport">

            <h3>
                🛡️ License Passport
            </h3>


            <div class="license-grid">


                <div class="license-item">

                    <span>
                        Creator Ownership Verification
                    </span>

                    <strong class="verified">
                        ${creator.license.ownership
                            ? "✓ Verified"
                            : "✗ Not Verified"}
                    </strong>

                </div>


                <div class="license-item">

                    <span>
                        Commercial Usage Permission
                    </span>

                    <strong class="verified">
                        ${creator.license.commercialUse
                            ? "✓ Allowed"
                            : "✗ Not Allowed"}
                    </strong>

                </div>


                <div class="license-item">

                    <span>
                        License Type
                    </span>

                    <strong>
                        ${creator.license.type}
                    </strong>

                </div>


                <div class="license-item">

                    <span>
                        License Expiry Date
                    </span>

                    <strong>
                        ${creator.license.expiry}
                    </strong>

                </div>


                <div class="license-item">

                    <span>
                        AI Generated Content Disclosure
                    </span>

                    <strong class="verified">
                        ${creator.license.aiDisclosure
                            ? "✓ Disclosed"
                            : "✗ Not Disclosed"}
                    </strong>

                </div>


                <div class="license-item">

                    <span>
                        Content Usage Tracking
                    </span>

                    <strong class="verified">
                        ${creator.license.tracking
                            ? "✓ Active"
                            : "✗ Inactive"}
                    </strong>

                </div>

            </div>


            <div class="usage-tracking">

                <h4>
                    📊 Content Usage Tracking
                </h4>

                <div class="usage-row">
                    <span>Instagram</span>
                    <span>Active</span>
                </div>

                <div class="usage-row">
                    <span>Facebook</span>
                    <span>Active</span>
                </div>

                <div class="usage-row">
                    <span>Website</span>
                    <span>Not Used</span>
                </div>

            </div>

        </div>


        <button
            class="primary-btn"
            onclick="selectCreator(${index})">

            Select / Hire Creator

        </button>

    `;


    showPage("creatorProfile");

}


// ================= SELECT CREATOR =================

function selectCreator(index) {

    const creator =
        creators[index];


    if (!creator) return;


    selectedCreator =
        creator;


    document.getElementById(
        "selectedCreatorName"
    ).textContent =
        creator.name;


    showPage("revision");

}


// ================= EXAMPLE INPUT =================

function useExample(text) {

    const input =
        document.getElementById("briefInput");


    if (input) {

        input.value = text;

    }

}


// ================= GENERATE BRIEF =================

function generateBrief() {

    const inputElement =
        document.getElementById("briefInput");


    if (!inputElement) return;


    const input =
        inputElement.value.trim();


    if (input === "") {

        alert(
            "Please enter your requirement first."
        );

        return;
    }


    const text =
        input.toLowerCase();


    let festival =
        "General";


    let contentType =
        "Social Media Advertisement";


    let style =
        "Modern + Premium";


    let targetAudience =
        "Indian Consumers";


    // FESTIVAL

    if (
        text.includes("sankranti") ||
        text.includes("pongal")
    ) {

        festival = "Sankranti";

        style = "Traditional + Premium";

    }

    else if (text.includes("diwali")) {

        festival = "Diwali";

        style = "Festive + Premium";

    }

    else if (text.includes("dussehra")) {

        festival = "Dussehra";

        style = "Traditional + Cinematic";

    }

    else if (text.includes("ugadi")) {

        festival = "Ugadi";

        style = "Traditional + Fresh";

    }

    else if (text.includes("onam")) {

        festival = "Onam";

        style = "Traditional + Elegant";

    }

    else if (text.includes("christmas")) {

        festival = "Christmas";

        style = "Festive + Modern";

    }

    else if (text.includes("wedding")) {

        festival = "Wedding";

        style = "Luxury + Elegant";

    }


    // CONTENT TYPE

    if (
        text.includes("video") ||
        text.includes("reel") ||
        text.includes("cinematic")
    ) {

        contentType =
            "AI Video / Reel";

    }

    else if (
        text.includes("poster")
    ) {

        contentType =
            "AI Poster Advertisement";

    }

    else if (
        text.includes("photo") ||
        text.includes("image")
    ) {

        contentType =
            "AI Product Image";

    }


    // AUDIENCE

    if (
        text.includes("jewellery") ||
        text.includes("jewelry")
    ) {

        targetAudience =
            "Jewellery & Luxury Consumers";

    }

    else if (
        text.includes("food") ||
        text.includes("restaurant") ||
        text.includes("sweet") ||
        text.includes("sweets")
    ) {

        targetAudience =
            "Food & Restaurant Customers";

    }

    else if (
        text.includes("fashion") ||
        text.includes("saree") ||
        text.includes("clothing")
    ) {

        targetAudience =
            "Fashion Consumers";

    }


    currentBrief = {

        originalRequirement: input,

        campaign:
            `${festival} Campaign`,

        contentType:
            contentType,

        style:
            style,

        targetAudience:
            targetAudience,

        festival:
            festival,

        platform:
            "Instagram",

        aspectRatio:
            "9:16",

        commercialUse:
            "Required",

        aiDisclosure:
            "Required",

        licenseVerification:
            "Required",

        usageTracking:
            "Enabled",

        budget:
            "₹25,000",

        deliverables:
            "1 Main Creative + 3 Social Media Variations"

    };


    displayBrief();


    showMatches(festival);

}


// ================= DISPLAY BRIEF =================

function displayBrief() {

    const output =
        document.getElementById("briefOutput");


    if (!output) return;


    output.innerHTML = `

        <div class="brief-card">

            <h3>
                ✨ AI Generated Professional Brief
            </h3>


            <div class="brief-row">

                <span>
                    Original Requirement
                </span>

                <strong>
                    ${currentBrief.originalRequirement}
                </strong>

            </div>


            <div class="brief-row">

                <span>Campaign</span>

                <strong>
                    ${currentBrief.campaign}
                </strong>

            </div>


            <div class="brief-row">

                <span>Content Type</span>

                <strong>
                    ${currentBrief.contentType}
                </strong>

            </div>


            <div class="brief-row">

                <span>Style</span>

                <strong>
                    ${currentBrief.style}
                </strong>

            </div>


            <div class="brief-row">

                <span>Target Audience</span>

                <strong>
                    ${currentBrief.targetAudience}
                </strong>

            </div>


            <div class="brief-row">

                <span>Festival / Occasion</span>

                <strong>
                    ${currentBrief.festival}
                </strong>

            </div>


            <div class="brief-row">

                <span>Platform</span>

                <strong>
                    ${currentBrief.platform}
                </strong>

            </div>


            <div class="brief-row">

                <span>Aspect Ratio</span>

                <strong>
                    ${currentBrief.aspectRatio}
                </strong>

            </div>


            <div class="brief-row">

                <span>Commercial Usage</span>

                <strong>
                    ✓ ${currentBrief.commercialUse}
                </strong>

            </div>


            <div class="brief-row">

                <span>AI Content Disclosure</span>

                <strong>
                    ✓ ${currentBrief.aiDisclosure}
                </strong>

            </div>


            <div class="brief-row">

                <span>License Verification</span>

                <strong>
                    ✓ ${currentBrief.licenseVerification}
                </strong>

            </div>


            <div class="brief-row">

                <span>Content Usage Tracking</span>

                <strong>
                    ✓ ${currentBrief.usageTracking}
                </strong>

            </div>


            <div class="brief-row">

                <span>Suggested Budget</span>

                <strong>
                    ${currentBrief.budget}
                </strong>

            </div>


            <div class="brief-row">

                <span>Deliverables</span>

                <strong>
                    ${currentBrief.deliverables}
                </strong>

            </div>

        </div>

    `;

}


// ================= AI MATCHING =================

function showMatches(festival) {

    const container =
        document.getElementById("matchResults");


    if (!container) return;


    let matches =
        creators.slice();


    if (
        festival &&
        festival !== "General"
    ) {

        const festivalMatches =
            creators.filter(function(creator) {

                return creator.festivals.includes(
                    festival
                );

            });


        if (festivalMatches.length > 0) {

            matches =
                festivalMatches;

        }

    }


    matches.sort(function(a, b) {

        return b.match - a.match;

    });


    container.innerHTML = `

        <div class="section-heading">

            <span>
                AI RECOMMENDATION
            </span>

            <h2>
                Best Creator Matches
            </h2>

            <p class="match-description">
                Matching creators based on your requirement.
            </p>

        </div>

    `;


    matches.forEach(function(creator) {

        const index =
            creators.indexOf(creator);


        const card =
            document.createElement("div");


        card.className =
            "match-card";


        card.innerHTML = `

            <div class="match-avatar">
                ${creator.name.charAt(0)}
            </div>


            <div class="match-info">

                <h3>
                    ${creator.name}
                </h3>

                <p>
                    ${creator.specialization}
                </p>


                <div class="match-score">

                    🎯 ${creator.match}% Match

                </div>


                <div class="match-reasons">

                    ✓ Relevant AI skills<br>

                    ✓ Ownership verified<br>

                    ✓ Commercial usage available<br>

                    ✓ AI disclosure available<br>

                    ✓ License passport available

                </div>


                <button
                    class="primary-btn"
                    onclick="selectCreator(${index})">

                    Select Creator

                </button>

            </div>

        `;


        container.appendChild(card);

    });


    showPage("matching");

}


// ================= REVISION CHAT =================

function sendRevision() {

    const input =
        document.getElementById("revisionInput");


    const chat =
        document.getElementById("chatMessages");


    if (!input || !chat) return;


    const message =
        input.value.trim();


    if (message === "") return;


    const userMessage =
        document.createElement("div");


    userMessage.className =
        "chat-message user";


    userMessage.innerHTML = `

        <strong>
            Brand
        </strong>

        <p>
            ${message}
        </p>

    `;


    chat.appendChild(
        userMessage
    );


    input.value = "";


    setTimeout(function() {

        const aiMessage =
            document.createElement("div");


        aiMessage.className =
            "chat-message creator";


        aiMessage.innerHTML = `

            <strong>
                🤖 AI Creator Assistant
            </strong>

            <p>
                Revision request received.
                The creative prompt will be updated
                and Version 2 will be generated.
            </p>

            <small>

                ✓ V1 preserved<br>

                ✓ Revision tracked<br>

                ✓ Prompt version updated<br>

                ✓ Content usage tracking updated

            </small>

        `;


        chat.appendChild(
            aiMessage
        );


        chat.scrollTop =
            chat.scrollHeight;


    }, 700);

}


// ================= ENTER KEY FOR CHAT =================

function setupRevisionChat() {

    const input =
        document.getElementById("revisionInput");


    if (!input) return;


    input.addEventListener(
        "keydown",
        function(event) {

            if (event.key === "Enter") {

                event.preventDefault();

                sendRevision();

            }

        }
    );

}


// ================= SEARCH LIVE =================

function setupSearch() {

    const search =
        document.getElementById(
            "creatorSearch"
        );


    const festival =
        document.getElementById(
            "festivalFilter"
        );


    if (search) {

        search.addEventListener(
            "input",
            searchCreators
        );

    }


    if (festival) {

        festival.addEventListener(
            "change",
            searchCreators
        );

    }

}


// ================= START APP =================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        displayCreators(
            creators
        );


        setupSearch();


        setupRevisionChat();


        showPage("home");

    }
);