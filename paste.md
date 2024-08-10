---
layout: page
title: Paste Bin
nav-menu: true
image: assets/images/pic01.jpg
show_tile: false
---

<script>
        async function fetchFirebaseText() {
            try {
                const response = await fetch('https://parth-home-page-default-rtdb.firebaseio.com/exampleKey.json');
                if (response.ok) {
                    const data = await response.json();
                    if (data && data.text) {
                        document.getElementById("inputText").value = data.text;
                    } else {
                        document.getElementById("inputText").placeholder = "No existing text";
                    }
                } else {
                    alert("Failed to fetch data from Firebase.");
                }
            } catch (error) {
                console.error("Error:", error);
                alert("An error occurred while fetching data from Firebase.");
            }
        }

        async function updateFirebase(event) {
            event.preventDefault(); // Prevent form submission
            const inputText = document.getElementById("inputText").value;
            
            const data = {
                text: inputText
            };

            try {
                const response = await fetch('https://parth-home-page-default-rtdb.firebaseio.com/exampleKey.json', {
                    method: 'PATCH', // Use PATCH to update the existing value
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });

                if (response.ok) {
                    alert("Firebase updated successfully!");
                } else {
                    alert("Failed to update Firebase.");
                }
            } catch (error) {
                console.error("Error:", error);
                alert("An error occurred while updating Firebase.");
            }
        }

        window.onload = fetchFirebaseText;
</script>

<div id="main" class="alt">
<section id="one">
<div class="inner">
    <header class="major">
        <h1>Paste Bin</h1>
    </header>
    <form onsubmit="updateFirebase(event)">
        <label for="inputText">Enter Text:</label>
        <textarea style="height: 30rem;" type="text" id="inputText" name="inputText" required></textarea>
        <button type="submit">Update Firebase</button>
    </form>
    </div>
</section>
</div>