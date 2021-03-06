
/**
 * A wrapper for the querySelector method
 * 
 * @param selector Selector to query
 * @param scope Scope of query. Ff left null, will scope to document
 */
export function qs(selector: string, scope?: Element): Element
{
	return <Element>(scope || document).querySelector(selector);
}

/**
 * A wrapper for the querySelectorAll method
 * 
 * @param selector Selector to query
 * @param scope Scope of query. Ff left null, will scope to document
 */
export function qsa(selector: string, scope: Element)
{
	return [...(scope || document).querySelectorAll(selector)];
}

export function $on(target: Element|Window, type: string, callback: EventListenerOrEventListenerObject)
{
	target.addEventListener(type, callback);
}