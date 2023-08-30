const name = 'Rahn IT-Systemtechnik';
const phoneData = 'MDg2MzMgLyA5Nzc5NjkgLSAw';
const mailData = 'aW5mb0BpdC1yYWhuLmRl';
const street = 'Alte Bahn 9';
const plz = '84577';
const city = 'Tüßling';
const ustData = 'aW5mb0BpdC1yYWhuLmRl';
const ibanData = 'REUgOTUgNzYwMSAwMDg1IDA1OTkgMzQxOCA1Mw';

export function phone(): string {
	return atob(phoneData);
}

export function mail(): string {
	return atob(mailData);
}

export function ust(): string {
	return atob(ustData);
}

export function iban(): string {
	return atob(ibanData);
}

export { name, street, plz, city };
