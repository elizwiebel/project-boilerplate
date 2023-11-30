((): void => {
    const tabBtns = document.querySelectorAll(".tab-btn")! as NodeListOf<HTMLElement>;
    const tabContents = document.querySelectorAll(".tab-content")! as NodeListOf<HTMLElement>;

    let currentTab = 0;

    for (let i = 0; i < tabBtns.length; i++) {
        console.log("tabBtns", tabBtns);

        const test = tabBtns[i];
        test.addEventListener("click", (e) => btnClickHandler(e, i));
    }

    function btnClickHandler(e: Event, i: number): void {
        if (i === currentTab) return;
        if (i >= tabContents.length) throw new Error(`Missing tab content element ${i}`);

        tabBtns[currentTab].classList.toggle("--active");
        tabBtns[i].classList.toggle("--active");

        tabContents[currentTab].classList.toggle("--active");
        tabContents[i].classList.toggle("--active");

        currentTab = i;
    }
})();
