window.onload = () => {
    const sdrStart = 1;
    const sdrEnd = 5;
  
    const sdrNumber = Math.floor(Math.random() * (sdrEnd - sdrStart + 1) + sdrStart);
    const url = new URL(window.location.href);

    url.searchParams.delete('sdr_field');
    url.searchParams.append('sdr_field', sdrNumber)

    window.history.pushState(document.title, '', url);
};