import { key } from '@/static/key';
import { IUser } from '@/types';

export function saveTheme(theme: string) {
	return sessionStorage.setItem(
		key.THEME_SESSION_STORAGE_KEY,
		theme,
	);
}

export function getTheme() {
	return sessionStorage.getItem(
		key.THEME_SESSION_STORAGE_KEY,
	);
}

export function saveAccessToken(accessToken: string) {
	return sessionStorage.setItem(
		key.ACCESS_TOKEN_SESSION_STORAGE_KEY,
		JSON.stringify(accessToken),
	);
}

export function getAccessToken() {
	const accessToken = sessionStorage.getItem(
		key.ACCESS_TOKEN_SESSION_STORAGE_KEY,
	);
	return accessToken ? JSON.parse(accessToken) : '{}';
}

export function removeAccessToken() {
	return sessionStorage.removeItem(
		key.ACCESS_TOKEN_SESSION_STORAGE_KEY,
	);
}

export function saveUser(User: IUser) {
	return sessionStorage.setItem(
		key.USER_SESSION_STORAGE_KEY,
		JSON.stringify(User),
	);
}

export function getUser(): IUser {
	const user = sessionStorage.getItem(
		key.USER_SESSION_STORAGE_KEY,
	);
	return user ? JSON.parse(user) : undefined;
}

export function removeUser() {
	return sessionStorage.removeItem(
		key.USER_SESSION_STORAGE_KEY,
	);
}
