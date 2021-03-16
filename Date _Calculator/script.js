const form = document.querySelector('.add');
const feedback = document.querySelector('.feedback');
const result = document.querySelector('.result');
const myPattern = /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))/

form.addEventListener('submit', e => {
    e.preventDefault();
    const yourDate = form.yourBithdate.value.trim();

    /// validation
    if (!myPattern.test(yourDate)) {
        feedback.textContent = 'please enter the date in the format: yyyy-mm-dd';
    }
    ////to output years, months, days
    const before = new Date(yourDate);
    const now = new Date();
    const diff = now.getTime() - before.getTime();
    //console.log(diff);

    //// to convert milisec in days-years
    const mins = Math.round(diff / 1000 / 60);
    const hours = Math.round(mins / 60);
    const days = Math.round(hours / 24);
    const months = Math.round(days / 31);
    //const years = Math.round(months / 12);

    ///// combine it with dateFns library
    result.innerHTML = `You must be ${dateFns.distanceInWords(now, before)} old which is about ${days} days`;
});