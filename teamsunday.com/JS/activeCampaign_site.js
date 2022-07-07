window.onload = () => {
    const currentUrl = document.title;

    const url = new URL(window.location.href);

    url.searchParams.delete('form_submit_page');
    url.searchParams.append('form_submit_page', currentUrl)

    window.history.pushState(document.title, '', url);
};