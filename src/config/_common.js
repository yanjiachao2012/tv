/**
 * 存储localStorage
 */
export const setStore = (name, content) => {
	if (!name) {
		return;
	}
	if (typeof content !== 'string') {
		content = JSON.stringify(content);
	}
	window.localStorage.setItem(name, content);
}

/**
 * 获取localStorage
 */
export const getStore = name => {
	if (!name) {
		return;
	}
	return window.localStorage.getItem(name);
}

/**
 * 删除localStorage
 */
export const removeStore = name => {
	if (!name) {
		return;
	}
	window.localStorage.removeItem(name);
}

//json字符串转json对象

export const toJson = content => {
	if (!content) {
		return;
	}
	return JSON.parse(content);
}