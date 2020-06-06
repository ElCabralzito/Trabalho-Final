// Fuction to Hidden SidebarContent on click Add button
async function sidebarContent(param) {
	if (param === "close") {
		document.querySelector(".sidebarContent").style.width = 0;
		document.querySelector(".btn.add > img").style.transform = "rotate(0deg)";
		return;
	}

	if (document.querySelector(".sidebarContent").style.width == "250px") {
		document.querySelector(".sidebarContent").style.width = 0;
		document.querySelector(".btn.add > img").style.transform = "rotate(0deg)";
	} else {
		document.querySelector(".sidebarContent").style.width = "250px";
		document.querySelector(".btn.add > img").style.transform = "rotate(45deg)";
	}
}