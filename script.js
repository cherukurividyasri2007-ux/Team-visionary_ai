/* =====================================================
   CREATOR DATA
===================================================== */

const creators = [

    {
        name: "Ananya Rao",
        category: "Fashion",
        platform: "Instagram",
        city: "Chennai",
        followers: "125K",
        rating: "4.9",
        price: "₹12,000",
        image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
        tags: ["Fashion", "Video", "Festival"]
    },


    {
        name: "Meera Motion",
        category: "Video",
        platform: "Instagram",
        city: "Hyderabad",
        followers: "98K",
        rating: "4.8",
        price: "₹9,500",
        image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
        tags: ["Video", "Cinematic", "Reels"]
    },


    {
        name: "Karthik Visuals",
        category: "Video",
        platform: "YouTube",
        city: "Bangalore",
        followers: "210K",
        rating: "4.7",
        price: "₹14,000",
        image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
        tags: ["Video", "AI", "Storytelling"]
    },


    {
        name: "Riya Creatives",
        category: "Animation",
        platform: "Instagram",
        city: "Mumbai",
        followers: "75K",
        rating: "4.8",
        price: "₹10,000",
        image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
        tags: ["Animation", "Motion", "AI"]
    },


    {
        name: "Lakshmi Jewellery",
        category: "Jewellery",
        platform: "Instagram",
        city: "Chennai",
        followers: "145K",
        rating: "4.9",
        price: "₹18,000",
        image:
        "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=800&q=80",
        tags: ["Jewellery", "Fashion", "Festival"]
    },


    {
        name: "Priya Stories",
        category: "Fashion",
        platform: "YouTube",
        city: "Hyderabad",
        followers: "110K",
        rating: "4.8",
        price: "₹13,000",
        image:
        "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80",
        tags: ["Fashion", "Story", "Lifestyle"]
    }

];


/* =====================================================
   OPEN PAGE
===================================================== */

function openPage(pageId, clickedButton) {


    const pages =
        document.querySelectorAll(".page");


    pages.forEach(function(page) {

        page.classList.remove("active");

    });


    const target =
        document.getElementById(pageId);


    if (target) {

        target.classList.add("active");

    }


    const navItems =
        document.querySelectorAll(".nav-item");


    navItems.forEach(function(item) {

        item.classList.remove("active");

    });


    if (clickedButton) {

        clickedButton.classList.add("active");

    }


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });


    if (pageId === "discover") {

        displayCreators(creators);

    }


    if (pageId === "shortlist") {

        displayShortlist();

    }

}


/* =====================================================
   OPEN PAGE BY NAME
===================================================== */

function openPageByName(pageId) {


    const buttons =
        document.querySelectorAll(".nav-item");


    let buttonFound = null;


    buttons.forEach(function(button) {

        const text =
            button.textContent.toLowerCase();


        if (
            pageId === "brief" &&
            text.includes("brief builder")
        ) {

            buttonFound = button;

        }


        if (
            pageId === "discover" &&
            text.includes("creator discovery")
        ) {

            buttonFound = button;

        }


        if (
            pageId === "campaigns" &&
            text.includes("campaign pipeline")
        ) {

            buttonFound = button;

        }


        if (
            pageId === "shortlist" &&
            text.includes("shortlist")
        ) {

            buttonFound = button;

        }

    });


    openPage(pageId, buttonFound);

}


/* =====================================================
   DISPLAY CREATORS
===================================================== */

function displayCreators(list) {


    const grid =
        document.getElementById(
            "creatorGrid"
        );


    if (!grid) return;


    grid.innerHTML = "";


    list.forEach(function(creator) {


        const tags =
            creator.tags.map(function(tag) {

                return `
                    <span>${tag}</span>
                `;

            }).join("");


        grid.innerHTML += `

            <div class="creator-card">


                <div class="creator-image">

                    <img
                        src="${creator.image}"
                        alt="${creator.name}"
                    >

                    <span class="verified">
                        ✓ VERIFIED
                    </span>


                    <button
                        class="heart"
                        onclick="addShortlist('${creator.name}')"
                    >
                        ♡
                    </button>

                </div>


                <div class="creator-card-body">

                    <h3>
                        ${creator.name}
                    </h3>


                    <p>
                        ${creator.category}
                        •
                        ${creator.platform}
                        •
                        ${creator.city}
                    </p>


                    <div class="tags">

                        ${tags}

                    </div>


                    <p>

                        ⭐ ${creator.rating}

                        &nbsp; • &nbsp;

                        👥 ${creator.followers}

                    </p>


                    <div class="creator-footer">

                        <strong>
                            ${creator.price}
                        </strong>


                        <button
                            onclick="addShortlist('${creator.name}')"
                        >
                            + Shortlist
                        </button>

                    </div>

                </div>

            </div>

        `;

    });

}


/* =====================================================
   FILTER CREATORS
===================================================== */

function filterCreators() {


    const search =
        document.getElementById(
            "creatorSearch"
        ).value.toLowerCase();


    const category =
        document.getElementById(
            "categoryFilter"
        ).value;


    const filtered =
        creators.filter(function(creator) {


            const searchMatch =

                creator.name
                    .toLowerCase()
                    .includes(search)

                ||

                creator.category
                    .toLowerCase()
                    .includes(search)

                ||

                creator.city
                    .toLowerCase()
                    .includes(search);


            const categoryMatch =

                category === "all"

                ||

                creator.category === category;


            return (
                searchMatch &&
                categoryMatch
            );

        });


    displayCreators(filtered);

}


/* =====================================================
   SHORTLIST
===================================================== */

function addShortlist(name) {


    let saved =
        JSON.parse(
            localStorage.getItem(
                "visionaryShortlist"
            )
        ) || [];


    if (!saved.includes(name)) {

        saved.push(name);

        localStorage.setItem(
            "visionaryShortlist",
            JSON.stringify(saved)
        );


        alert(
            name +
            " added to shortlist!"
        );

    }

}


/* =====================================================
   DISPLAY SHORTLIST
===================================================== */

function displayShortlist() {


    const grid =
        document.getElementById(
            "shortlistGrid"
        );


    if (!grid) return;


    const saved =
        JSON.parse(
            localStorage.getItem(
                "visionaryShortlist"
            )
        ) || [];


    const selected =
        creators.filter(function(creator) {

            return saved.includes(
                creator.name
            );

        });


    if (selected.length === 0) {

        grid.innerHTML = `

            <div class="card">

                <div class="empty">

                    <div>♡</div>

                    <h3>
                        No creators shortlisted
                    </h3>

                    <p>
                        Go to Creator Discovery
                        and add creators.
                    </p>

                </div>

            </div>

        `;

        return;

    }


    displayCreators(selected);


    /*
       displayCreators() uses creatorGrid,
       so manually render shortlist.
    */

    grid.innerHTML = "";


    selected.forEach(function(creator) {

        grid.innerHTML += `

            <div class="creator-card">

                <div class="creator-image">

                    <img src="${creator.image}">

                    <span class="verified">
                        ✓ VERIFIED
                    </span>

                </div>

                <div class="creator-card-body">

                    <h3>
                        ${creator.name}
                    </h3>

                    <p>
                        ${creator.category}
                        •
                        ${creator.platform}
                    </p>

                    <div class="tags">

                        ${creator.tags
                            .map(tag =>
                                `<span>${tag}</span>`
                            )
                            .join("")}

                    </div>

                    <div class="creator-footer">

                        <strong>
                            ${creator.price}
                        </strong>

                        <button
                            onclick="removeShortlist('${creator.name}')"
                        >
                            Remove
                        </button>

                    </div>

                </div>

            </div>

        `;

    });

}


/* =====================================================
   REMOVE SHORTLIST
===================================================== */

function removeShortlist(name) {


    let saved =
        JSON.parse(
            localStorage.getItem(
                "visionaryShortlist"
            )
        ) || [];


    saved =
        saved.filter(function(item) {

            return item !== name;

        });


    localStorage.setItem(
        "visionaryShortlist",
        JSON.stringify(saved)
    );


    displayShortlist();

}


/* =====================================================
   VOICE INPUT
===================================================== */

function startVoice() {


    const SpeechRecognition =
        window.SpeechRecognition ||
        window.webkitSpeechRecognition;


    if (!SpeechRecognition) {

        alert(
            "Voice recognition is not supported in this browser."
        );

        return;

    }


    const recognition =
        new SpeechRecognition();


    recognition.lang = "en-IN";

    recognition.continuous = false;

    recognition.interimResults = false;


    recognition.start();


    recognition.onresult =
        function(event) {


            const text =
                event.results[0][0]
                    .transcript;


            document.getElementById(
                "voiceText"
            ).value = text;

        };

}


/* =====================================================
   GENERATE VOICE BRIEF
===================================================== */

function generateVoiceBrief() {


    const text =
        document.getElementById(
            "voiceText"
        ).value;


    const output =
        document.getElementById(
            "voiceOutput"
        );


    const idea =
        text ||
        "Create a Pongal festival promotional video for Instagram.";


    output.innerHTML = `

        <div>

            <div class="card-title">

                <div>

                    <h3>
                        ✦ Generated Professional Brief
                    </h3>

                    <p>
                        AI converted your idea into
                        a campaign-ready brief.
                    </p>

                </div>

                <span class="status completed">
                    Ready
                </span>

            </div>


            <div class="result-section">

                <strong>
                    Campaign Idea
                </strong>

                <p>
                    ${idea}
                </p>

            </div>


            <div class="result-section">

                <strong>
                    Content Type
                </strong>

                <p>
                    Cinematic Instagram Reel
                </p>

            </div>


            <div class="result-section">

                <strong>
                    Style
                </strong>

                <p>
                    Traditional • Festive • Cinematic
                </p>

            </div>


            <div class="result-section">

                <strong>
                    Duration
                </strong>

                <p>
                    20 seconds
                </p>

            </div>


            <div class="result-section">

                <strong>
                    Language
                </strong>

                <p>
                    Telugu
                </p>

            </div>


            <div class="result-section">

                <strong>
                    Budget
                </strong>

                <p>
                    ₹10,000 - ₹15,000
                </p>

            </div>

        </div>

    `;

}


/* =====================================================
   AI BRIEF BUILDER
===================================================== */

function generateBrief() {


    const idea =
        document.getElementById(
            "briefIdea"
        ).value;


    const output =
        document.getElementById(
            "briefResult"
        );


    const campaign =
        idea ||
        "Create a Pongal saree advertisement for Instagram.";


    output.innerHTML = `

        <div>

            <div class="card-title">

                <div>

                    <h3>
                        ✦ AI Generated Brief
                    </h3>

                    <p>
                        Professional campaign brief
                    </p>

                </div>

                <span class="status completed">
                    Generated
                </span>

            </div>


            <div class="result-section">

                <strong>
                    Campaign
                </strong>

                <p>
                    ${campaign}
                </p>

            </div>


            <div class="result-section">

                <strong>
                    Content Type
                </strong>

                <p>
                    Video
                </p>

            </div>


            <div class="result-section">

                <strong>
                    Style
                </strong>

                <p>
                    Traditional, festive and cinematic
                </p>

            </div>


            <div class="result-section">

                <strong>
                    Aspect Ratio
                </strong>

                <p>
                    9:16 Instagram Reel
                </p>

            </div>


            <div class="result-section">

                <strong>
                    Duration
                </strong>

                <p>
                    20 seconds
                </p>

            </div>


            <div class="result-section">

                <strong>
                    Language
                </strong>

                <p>
                    Telugu
                </p>

            </div>


            <div class="result-section">

                <strong>
                    Key Requirements
                </strong>

                <p>
                    ✓ Show product clearly<br>
                    ✓ Traditional South Indian styling<br>
                    ✓ Festival atmosphere<br>
                    ✓ High quality 1080p output
                </p>

            </div>

        </div>

    `;

}


/* =====================================================
   SMART MATCH
===================================================== */

function runMatch() {


    const container =
        document.getElementById(
            "matchResults"
        );


    const matches = [

        {
            creator: creators[0],
            score: 96
        },

        {
            creator: creators[4],
            score: 91
        },

        {
            creator: creators[1],
            score: 87
        },

        {
            creator: creators[2],
            score: 82
        }

    ];


    container.innerHTML = "";


    matches.forEach(function(item) {


        const creator =
            item.creator;


        container.innerHTML += `

            <div class="match-card">


                <div class="match-card-top">

                    <img
                        src="${creator.image}"
                    >

                    <div>

                        <h3>
                            ${creator.name}
                        </h3>

                        <p>
                            ${creator.category}
                            •
                            ${creator.platform}
                        </p>

                    </div>

                </div>


                <div class="score-row">

                    <span>
                        AI Match Score
                    </span>

                    <strong>
                        ${item.score}%
                    </strong>

                </div>


                <div class="score-bar">

                    <i
                        style="width:${item.score}%"
                    ></i>

                </div>


                <p style="margin-top:12px">

                    ⭐ ${creator.rating}

                    &nbsp; • &nbsp;

                    👥 ${creator.followers}

                </p>


                <button
                    class="primary-btn"
                    style="margin-top:12px"
                    onclick="addShortlist('${creator.name}')"
                >
                    Shortlist
                </button>

            </div>

        `;

    });

}


/* =====================================================
   REVISION CHAT
===================================================== */

function sendMessage() {


    const input =
        document.getElementById(
            "chatInput"
        );


    const chat =
        document.getElementById(
            "chat"
        );


    const message =
        input.value.trim();


    if (!message) return;


    chat.innerHTML += `

        <div class="message brand-message">

            <strong>
                Brand
            </strong>

            <p>
                ${message}
            </p>

        </div>

    `;


    input.value = "";


    setTimeout(function() {


        chat.innerHTML += `

            <div class="message creator-message">

                <strong>
                    Creator
                </strong>

                <p>
                    Got it! I'll update the
                    content based on your revision.
                </p>

            </div>

        `;


    }, 600);

}


/* =====================================================
   INITIAL LOAD
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        displayCreators(creators);

        displayShortlist();

    }
);