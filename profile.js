document.addEventListener("DOMContentLoaded", () => {
	const form = document.getElementById("profileform");
	const inputName = document.getElementById("profileName");
	const inputEmail = document.getElementById("profileEmail");
	const inputBio = document.getElementById("profileBio");
	const displaySideName = document.getElementById("sideDisplayName");

	function loadUserProfile() {
        const savedProfileRaw = localStorage.getItem("userProfileData");
        if (savedProfileRaw) {
            const profile = JSON.parse(savedProfileRaw);
            inputName.value = profile.name;
            inputEmail.value = profile.email;
            inputBio.value = profile.bio;
            displaySideName.textContent = profile.name;
        }
	}

    loadUserProfile();

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const updatedProfile = {
            name: inputName.value,
            email: inputEmail.value,
            bio: inputBio.value
        };
        localStorage.setItem("userProfileData", JSON.stringify(updatedProfile));
        displaySideName.textContent = inputName.value;
        const submitBtn = form.querySelector("btn-primary");
        const defaultText = submitBtn.textContent;
         submitBtn.textContent = 'Changes Saved! ✓';
        submitBtn.style.backgroundColor = '#10b981';
        submitBtn.disabled = true;
        
        setTimeout(() => {
              submitBtn.textContent = defaultText;
            submitBtn.style.backgroundColor = '';
            submitBtn.disabled = false;
        }, 2500);
    });
    loadUserProfile();
});
