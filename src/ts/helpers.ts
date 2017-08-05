
/**
 * A wrapper for the querySelector method
 * 
 * @param selector Selector to query
 * @param scope Scope of query. Ff left null, will scope to document
 */
export function qs(selector: string, scope: HTMLElement): Element|null
{
	return (scope || document).querySelector(selector);
}

/**
 * A wrapper for the querySelectorAll method
 * 
 * @param selector Selector to query
 * @param scope Scope of query. Ff left null, will scope to document
 */
export function qsa(selector: string, scope: HTMLElement): NodeList
{
	return (scope || document).querySelectorAll(selector);
}