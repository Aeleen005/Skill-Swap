#  SkillSwap - Trade Your Skills!

SkillSwap is a simple website where people can trade skills for free. For example, you can teach someone HTML/CSS, and in return, they can teach you Video Editing! 

This project uses basic **HTML**, **CSS**, and **JavaScript**. It runs entirely in your web browser and saves your data automatically using **LocalStorage**.

---
##  Project Files

* **discover.html & discover.js**: The main marketplace page. You can see available skills, search through them, and post your own skill using a pop-up form.
* **dashboard.html & dashboard.js**: Your personal tracker page. It shows your active skill trades, has a working **Chat Room** to message your partners, and lets you click "Mark Complete" when you finish a trade.
* **profile.html & profile.js**: Your settings page where you can update your name, email, and bio description.
* **style.css**: The single design stylesheet that makes all three pages look organized and modern.

---

## How the Data is Saved (LocalStorage & JSON)

This project does not use an expensive database server. Instead, it uses **LocalStorage**, which saves your information directly inside your web browser. Even if you refresh the page or close the tab, your data will still be there!

Because LocalStorage can only save plain text, we use **JSON** to convert our JavaScript data:
* **`JSON.stringify()`**: Converts our data into a text string so the browser can save it.
* **`JSON.parse()`**: Converts that text string back into usable data when the website loads.

### Keys Saved in Your Browser:
1. `communitySkills`: Stores all the skill posts made on the Discover page.
2. `skillSwapConnections`: Stores your active trades shown on your Dashboard.
3. `chatRoomsLogs`: Stores your chat history for each separate chat room.
4. `userProfileData`: Stores your custom name, email, and bio.

---

##  How to Run the Project

1. Download all the files and put them into **one single folder** on your computer.
2. Double-click on **`discover.html`** to open it up in any web browser (Chrome, Edge, Safari, etc.).
3. Navigate between pages using the top menu links!

