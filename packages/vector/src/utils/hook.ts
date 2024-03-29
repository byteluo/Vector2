interface TocItem {
    text: string;
    type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    target: string;
}

export interface PostHookObj {
    type: "PostHookObj";
    ctime: number;
    mtime: number;
    // 目录
    toc: Array<any>;
    cover?: string;
    _private: {
        filePath: string;
        except: boolean;
        // 文章内容
        rawContent: string;
        rawContentBody: string;
    };
    title: string;
    id: string;
    md5: string;
    content: string;
    word: number;
}

export interface IndexHookObj {
    type: "IndexHookObj";
    items: Array<{ mtime: number; cover: string; id: string; title: string }>;
    _private: {
        filePath: string;
    };
}

export type HookObj = PostHookObj | IndexHookObj;
