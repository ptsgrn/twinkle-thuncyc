import { Twinkle, init, SiteConfig } from './core';
import messages from './messages.json';
import mwMessageList from './mw-messages';

// import modules
import { Fluff } from './fluff';

// no customisation; import directly from core
import { DiffCore as Diff } from './core';

// Check if account is experienced enough to use Twinkle
if (!Morebits.userIsInGroup('autoconfirmed') && !Morebits.userIsInGroup('confirmed')) {
	throw new Error('Twinkle: forbidden!');
}

Twinkle.userAgent = `Twinkle (${mw.config.get('wgWikiID')})`;

Twinkle.summaryAd = ''; // TODO Not now

Twinkle.changeTags = '';

Twinkle.messageOverrides = messages;

Twinkle.extraMwMessages = mwMessageList;

// List of module classes enabled
Twinkle.registeredModules = [Fluff, Diff];

/**
 * Adjust the following configurations if necessary
 * Check the documentation for each property here:
 * https://twinkle.toolforge.org/core-docs/modules/siteconfig.html
 */

SiteConfig.permalinkSpecialPageName = 'Special:PermanentLink';

SiteConfig.botUsernameRegex = /([Bb][Oo][Tt]|บอต)\b/i;

SiteConfig.flaggedRevsNamespaces = [];

SiteConfig.redirectTagAliases = ['#REDIRECT', '#redirect', '#เปลี่ยนทาง'];

// Go!
init();
