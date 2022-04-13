export const pageview = ( gid, url ) =>
{
	window.gtag( 'config', gid, { page_path: url } )
};

export const event = ({ action, category, label, value }) =>
{
	window.gtag( 'event', action,
	{
		event_category: category,
		event_label: label,
		value: value
	});
};
