function formatDate(isoDate) {
    const date = new Date(isoDate);

    const formattedDate = new Intl.DateTimeFormat('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    }).format(date);

    const formattedTime = new Intl.DateTimeFormat('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
    }).format(date);

    return `${formattedDate} - ${formattedTime}`;
}

export default formatDate;
