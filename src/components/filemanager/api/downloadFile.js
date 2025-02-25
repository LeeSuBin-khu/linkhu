function downloadFiles(selectedFiles, onExpired) {
    const link = document.createElement("a");
    document.body.appendChild(link);

    selectedFiles.forEach(async (element) => {
        const { url, expires } = element.download;
        if (Date.parse(expires) > Date.now()) {
            link.href = url;
            link.click();
        } else {
            onExpired(
                "다운로드 실패",
                <>
                    파일 <strong>{selectedFiles[0].name}</strong>
                    {selectedFiles.length > 1
                        ? ` 및 ${selectedFiles.length - 1}개의 파일`
                        : ""}
                    의 다운로드 기간이 만료되었습니다.
                    <br />
                    창을 새로고침 후 다시 실행해주세요.
                </>
            );
        }
    });
    document.body.removeChild(link);
}

export default downloadFiles;
