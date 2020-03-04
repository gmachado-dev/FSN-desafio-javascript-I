// Base a ser utilizada

// const alunosDaEscola=[{
//     nome:"Henrique",notas:[],cursos:[],faltas:5},{
//     nome:"Edson",notas:[],cursos:[],faltas:2},{
//     nome:"Bruno",notas:[10,9.8,9.6],cursos:[],faltas:0},{
//     nome:"Guilherme",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"Full Stack",dataMatricula:new Date}],faltas:0},nome:"Carlos",notas:[],cursos:[],faltas:0},{nome:"Lucca",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"UX",dataMatricula:new Date}],faltas:0};



const alunosDaEscola=[{ 
        nome:"Henrique", notas:[], cursos:[], faltas:5 
        }, 

        { 
        nome:"Edson", notas:[], cursos:[], faltas:2 
        }, 
    
        { 
        nome:"Bruno", notas:[10,9.8,9.6], cursos:[], faltas:0
    
        }, 
    
        { 
        nome:"Guilherme", notas:[10,9.8,9.6], cursos:[{nomeDoCurso:"Full Stack",dataMatricula:new Date}], faltas:0 
        
        },
    
        { 
        nome:"Carlos", notas:[], cursos:[], faltas:0
    
        }, 
        { 
        nome:"Lucca", notas:[10,9.8,9.6], cursos:[{nomeDoCurso:"UX",dataMatricula:new Date}], faltas:0
        }

    ]; 
    
    // *********implementação

function adicionarAluno(nome){

    alunosDaEscola.push({nome: nome,notas:[],cursos:[],faltas:0}); console.log('O aluno ${nome} foi inserido com sucesso');return true;

} 

function listarAlunos(){ 
    
    console.log("***** LISTA DE ALUNOS ****"); 
    console.log(); 
    
    for(let i = 0; i < alunosDaEscola.length; i++) {
         console.log("__________"); 
         console.log("Nome do aluno:", alunosDaEscola[i].nome); 
         console.log("Notas: ", alunosDaEscola[i].notas); 
         let cursos = alunosDaEscola[i].cursos; 
         console.log("Cursos: ");
         for (let i = 0; i < cursos.length; i++) { 
             console.log(" " + cursos[i].nomeDoCurso + " | Data da matrícula: " + cursos[i].dataMatricula);
             }
              console.log("Faltas: ", alunosDaEscola[i].faltas);
             }
} 

function buscarAluno(nome){  
    
    for (let i = 0; i < alunosDaEscola.length; i++) { 
        if (alunosDaEscola[i].nome == nome) { 
            console.log('O aluno ${nome} está matriculado na escola'); return i;
         }
                
        }
        
        console.log('O aluno ${nome} não está matriculado na escola');
    
    }
    
function matricularAluno(aluno, curso){
    
    let alunoAEditar = buscarAluno(aluno);
    if (alunoAEditar >= 0) {
        alunosDaEscola[alunoAEditar].cursos.push({nomeDoCurso:curso,dataMatricula:new Date,}); console.log('O aluno ${aluno} foi matriculado no curso ${curso}'); 
    
    }

} 

function aplicarFalta(aluno){
    
     let alunoAEditar = buscarAluno(aluno);
     if (alunoAEditar >= 0) {
         alunosDaEscola[alunoAEditar].faltas++; console.log('Falta adicionada ao registro do aluno ${aluno}');
        
        }

    }
    
    
    function aplicarNota(aluno, nota){
        
        let alunoAEditar = buscarAluno(aluno);
        if (alunoAEditar >= 0) {
            alunosDaEscola[alunoAEditar].notas.push(nota);
            console.log('Nota ${nota} adicionada ao registro do aluno ${aluno}');
        }
    }
    

function aprovarAluno(aluno){

      let indice = buscarAluno(aluno);
      if (indice >= 0) {
          let alunoAEditar = alunosDaEscola[indice];    
          let mediaDoAluno = (alunoAEditar.notas.reduce((soma, nota) => soma + nota, 0) ) / alunoAEditar.notas.length;
          
            if(alunoAEditar.faltas <= 3 && mediaDoAluno >= 7 && alunoAEditar.cursos.length >= 1) { console.log('O aluno ${aluno} foi aprovado.');
         } else {
            console.log('O aluno ${aluno} foi reprovado.');
        }
    }
}