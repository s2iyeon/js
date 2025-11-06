/**
 * Todo 전체 정보 (서버에서 반환하는 완전한 형태)
 */
export interface TodoInfo {
  _id: number;
  title: string;
  content: string;
  done: boolean;
  important: boolean;
  category: string;
  createdAt: string;
  updatedAt: string;
  finishAt: string;
}

/**
 * Todo 목록 항목 (목록 조회 시 content 제외)
 */
export type TodoList = Omit<TodoInfo, 'content'>;

/**
 * Todo 생성 요청 (POST /todo/todolist)
 */
export interface TodoCreateReq {
  title: string;
  content?: string;
  important?: boolean;
  category?: string;
  finishAt?: string;
}

/**
 * Todo 수정 요청 (PATCH /todo/todolist/:id)
 */
export type TodoUpdateReq = Partial<Omit<TodoInfo, '_id' | 'createdAt' | 'updatedAt'>>;

/**
 * API 에러 응답
 */
export interface ApiError {
  ok: 0;
  message: string;
}

/**
 * Todo 목록 조회 응답 (GET /todo/todolist)
 * 성공: { ok: 1, items: [...], pagination: {...} }
 * 실패: { ok: 0, message: "에러 메시지" }
 */
export type TodoListRes = 
  | {
      ok: 1;
      items: TodoList[];
      pagination: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
      };
    }
  | ApiError;

/**
 * Todo 단일 항목 응답 (상세조회/생성/수정 공통)
 * 성공: { ok: 1, item: {...} }
 * 실패: { ok: 0, message: "에러 메시지" }
 */
export type TodoInfoRes = 
  | {
      ok: 1;
      item: TodoInfo;
    }
  | ApiError;

/**
 * Todo 삭제 응답 (DELETE /todo/todolist/:id)
 * 성공: { ok: 1 }
 * 실패: { ok: 0, message: "에러 메시지" }
 */
export type TodoDeleteRes = 
  | { ok: 1 }
  | ApiError;
