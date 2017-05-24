import { } from '../actions/Actions';

export interface File {
    filename: string,
    isDirectory: boolean,
    content: string,
    parentFile: File
    children: File[]
}

export interface FileListState {
    files: File[],
    open: File
}

const dummyFiles: File[] = [
    {
        filename: "test.js",
        isDirectory: false,
        content: "var a = 10; \n for (var q = 0; i < 10; i++) {\n    console.log('this is s[parta');\n }",
        parentFile: null,
        children: null
    },
    {
        filename: "src",
        isDirectory: true,
        content: null,
        parentFile: null,
        children: [
            {
                filename: "src2",
                isDirectory: true,
                content: null,
                parentFile: null,
                children: [
                    {
                        filename: "test2.js",
                        isDirectory: false,
                        content: "var a = 10; \n for (var q = 0; i < 10; i++) {\n    console.log('this is s[parta');\n }",
                        parentFile: null,
                        children: null
                    },
                    {
                        filename: "testz2.js",
                        isDirectory: false,
                        content: "var z = 10; \n for (var q = 0; i < 10; i++) {\n    console.log('this is s[parta');\n }",
                        parentFile: null,
                        children: null
                    }
                ]
            },
            {
                filename: "test.js",
                isDirectory: false,
                content: "var a = 10; \n for (var q = 0; i < 10; i++) {\n    console.log('this is s[parta');\n }",
                parentFile: null,
                children: null
            },
            {
                filename: "testz.js",
                isDirectory: false,
                content: "var z = 10; \n for (var q = 0; i < 10; i++) {\n    console.log('this is s[parta');\n }",
                parentFile: null,
                children: null
            }
        ]
    },{
        filename: "src1",
        isDirectory: true,
        content: null,
        parentFile: null,
        children: [
            {
                filename: "src2",
                isDirectory: true,
                content: null,
                parentFile: null,
                children: [
                    {
                        filename: "test2.js",
                        isDirectory: false,
                        content: "var a = 10; \n for (var q = 0; i < 10; i++) {\n    console.log('this is s[parta');\n }",
                        parentFile: null,
                        children: null
                    },
                    {
                        filename: "testz2.js",
                        isDirectory: false,
                        content: "var z = 10; \n for (var q = 0; i < 10; i++) {\n    console.log('this is s[parta');\n }",
                        parentFile: null,
                        children: null
                    }
                ]
            },
            {
                filename: "test.js",
                isDirectory: false,
                content: "var a = 10; \n for (var q = 0; i < 10; i++) {\n    console.log('this is s[parta');\n }",
                parentFile: null,
                children: null
            },
            {
                filename: "testz.js",
                isDirectory: false,
                content: "var z = 10; \n for (var q = 0; i < 10; i++) {\n    console.log('this is s[parta');\n }",
                parentFile: null,
                children: null
            }
        ]
    },{
        filename: "src2",
        isDirectory: true,
        content: null,
        parentFile: null,
        children: [
            {
                filename: "src2",
                isDirectory: true,
                content: null,
                parentFile: null,
                children: [
                    {
                        filename: "test2.js",
                        isDirectory: false,
                        content: "var a = 10; \n for (var q = 0; i < 10; i++) {\n    console.log('this is s[parta');\n }",
                        parentFile: null,
                        children: null
                    },
                    {
                        filename: "testz2.js",
                        isDirectory: false,
                        content: "var z = 10; \n for (var q = 0; i < 10; i++) {\n    console.log('this is s[parta');\n }",
                        parentFile: null,
                        children: null
                    }
                ]
            },
            {
                filename: "test.js",
                isDirectory: false,
                content: "var a = 10; \n for (var q = 0; i < 10; i++) {\n    console.log('this is s[parta');\n }",
                parentFile: null,
                children: null
            },
            {
                filename: "testz.js",
                isDirectory: false,
                content: "var z = 10; \n for (var q = 0; i < 10; i++) {\n    console.log('this is s[parta');\n }",
                parentFile: null,
                children: null
            }
        ]
    }
];

const dummyState: FileListState = { files: dummyFiles, open: dummyFiles[0] };

const reducer = (state = dummyState, action: /*FIXME*/ any) => {
    console.log(action);
    switch (action.type) {
        default:
            return state
    }
}

export const fileList = reducer;