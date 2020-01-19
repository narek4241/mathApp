answerNumberInSingleTask = 4;

// answers__status-table

// answStatTbl__btn

let generateAnswerStatusTableBtn = document.getElementById("answStatusTableBtn");
generateAnswerStatusTableBtn.addEventListener("click", answerStatusTable);

let loaderIndexAnswerStatusTable = 1;

function answerStatusTable() {
    if (loaderIndexAnswerStatusTable === 1) {
        for (let ch = 0; ch < document.getElementById("answStatusTableCont").children.length; ch++) {
            document.getElementById("answStatusTableCont").children[0].remove();
        }
        generateAnswerStatusTable();

        document.getElementById("answStatusTableBtn").innerHTML = "<i>Close</i>";
        loaderIndexAnswerStatusTable = 0;

    } else {
        for (let ch = 0; ch < document.getElementById("answStatusTableCont").children.length; ch++) {
            document.getElementById("answStatusTableCont").children[0].remove();
        }
        document.getElementById("answStatusTableBtn").innerHTML = "Answer Status Table";
        loaderIndexAnswerStatusTable++;
    }
}

// answStatTbl__content
function generateAnswerStatusTable() {
    let answerInputTable = document.getElementById("answStatusTableCont");

    let answerStatusTable = document.createElement("table");
    let answerStatusTableBody = document.createElement("tbody");
    // top side (N, 1 2 3 4 ..)
    for (let i = 0; i < 1; i++) {
        let raw = document.createElement("tr");
        for (let n = 0; n < 1; n++) {
            let head = document.createElement("th");
            let headText = document.createElement("div");
            headText.innerHTML = "N";

            head.appendChild(headText);
            raw.appendChild(head);
        }
        for (let j = 0; j < answerNumberInSingleTask; j++) {
            let head = document.createElement("th");
            let headText = document.createElement("div");
            headText.innerHTML = `${j + 1}`;

            head.appendChild(headText);
            raw.appendChild(head);
        }
        answerStatusTableBody.appendChild(raw);
    }
    // main content 
    for (let i = 0; i < checkSheet.length; i++) {
        let raw = document.createElement("tr");
        for (let n = 0; n < 1; n++) {
            let head = document.createElement("th");
            let headText = document.createElement("div");
            headText.innerHTML = `${i + 1}`;

            head.appendChild(headText);
            raw.appendChild(head);
        }
        for (let j = 0; j < answerNumberInSingleTask; j++) {
            let head = document.createElement("td");
            let headText = document.createElement("div");
            // headText.innerHTML = `${j+1}`;
            if (answerSheet[i]) {
                headText.innerHTML = `${answerSheet[i][j]}`;
                // getting rid of printing 'NaN'
                if (isNaN(answerSheet[i][j])) {
                    head.style.backgroundColor = "#ebecec";
                    headText.innerHTML = `-`;
                }
                // getting rid of printing 'undefined' (or having confl with NaN ('-'))
                if (answerSheet[i] == "") {
                    head.style.backgroundColor = "#f0eadd";
                    headText.innerHTML = "";
                }
            } else {
                head.style.backgroundColor = "#f0eadd";
            }

            head.appendChild(headText);
            raw.appendChild(head);
        }
        answerStatusTableBody.appendChild(raw);
    }

    answerStatusTable.appendChild(answerStatusTableBody);
    answerInputTable.appendChild(answerStatusTable);
}
