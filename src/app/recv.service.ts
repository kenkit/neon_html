import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import { WebsocketService } from './websocket.service';

const CHAT_URL = 'ws://localhost:9999';

export interface Message {
	author: string;
	message: string;
	progress_val: number;
	current_window: number;
}

@Injectable()
export class RecvService {

  public messages: Subject<Message>;

	constructor(wsService: WebsocketService) {
		this.messages = <Subject<Message>>wsService
			.connect(CHAT_URL)
			.map((response: MessageEvent): Message => {
				const data = JSON.parse(response.data);
				return {
					author: data.author,
					message: data.message,
					progress_val: data.progress_val,
					current_window: data.current_window
				};
			});
	}
}
