package com.example.joan.minitwitter;

//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
import android.support.v7.app.ActionBarActivity;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;

import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

//-----------------------------------------------------------------------------
// La interfaz grafica es un botón y un campo de texto para comprobar que funciona.
//-----------------------------------------------------------------------------

public class MainActivity extends ActionBarActivity {

    private TextView elTexto;
    private Button buttonget;
    private Button buttonpost;
    private EditText nombreget;
    private EditText numero;
    private EditText nombrepost;
    private EditText password;
    private EditText tweet;
    //-------------------------------------------------------------------------
    //-------------------------------------------------------------------------
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);


        this.elTexto = (TextView) findViewById(R.id.elTexto);
        this.buttonget = (Button) findViewById(R.id.buttonget);
        this.buttonpost = (Button) findViewById(R.id.buttonpost);
        this.nombreget = (EditText) findViewById(R.id.nombreget);
        this.numero = (EditText) findViewById(R.id.numero);
        this.nombrepost = (EditText) findViewById(R.id.nombrepost);
        this.password = (EditText) findViewById(R.id.password);
        this.tweet = (EditText) findViewById(R.id.tweet);

        Log.d("clienterestandroid", "fin onCreate()");
    }


    //-------------------------------------------------------------------------
    //-------------------------------------------------------------------------
    public void boton_get (View quien) {
        Log.d("clienterestandroid", "boton_get");
        this.elTexto.setText("Peticion enviada");

        // ojo: creo que hay que crear uno nuevo cada vez
        PeticionarioREST elPeticionario = new PeticionarioREST();

        // verbo de la petición (GET), donde se quiere enviar (url)(hay que sacar la dirección IP de donde se ejecuta el servidor, ip config)
        // null es lo que se copiaria en la carga y como es asincrono hay que poner un callback.
        elPeticionario.hacerPeticionREST("GET",  "http://158.42.236.180:8080/tweet/"+nombreget.getText().toString()+"/"+numero.getText().toString()+"/", null,
        //elPeticionario.hacerPeticionREST("GET",  "http://192.168.1.42:8080/tweet/Jtomas/1/", null,
                new PeticionarioREST.RespuestaREST () { //esto sera llamado cuando llegue la respuesta de la petición
                    @Override
                    public void callback(int codigo, String cuerpo) {
                        elTexto.setText ("codigo respuesta= " + codigo + " <-> \n" + cuerpo); //campo de texto en la pantalla del android para mostrar en pantalla
                    } //lo de dentro del public void es el callback
                }
        );}

        // (int codigo, String cuerpo) -> { elTexto.setText ("lo que sea"=; }



    public void boton_post (View quien) {
        Log.d("clienterestandroid", "boton_post");
        this.elTexto.setText("Publicando tweet");

        // ojo: creo que hay que crear uno nuevo cada vez
        PeticionarioREST elPeticionario = new PeticionarioREST();

        // verbo de la petición (GET), donde se quiere enviar (url)(hay que sacar la dirección IP de donde se ejecuta el servidor, ip config)
        // null es lo que se copiaria en la carga y como es asincrono hay que poner un callback.
        elPeticionario.hacerPeticionREST("POST",  "http://158.42.236.180:8080/tweet/"+nombrepost.getText().toString()+"/"+password.getText().toString()+"/", ""+tweet.getText().toString()+"",
        //elPeticionario.hacerPeticionREST("POST",  "http://192.168.1.42:8080/tweet", "{\"nombre\": \"Jtomas\", \"password\": \"Joan00\", \"texto\": \"prueba android\"}",
        //elPeticionario.hacerPeticionREST("POST",  "http://80.58.61.250:8080/tweet", "{\"nombre\": \""+nombrepost+"\", \"password\": \""+password+"\", \"texto\": \""+tweet+"\"}",
                new PeticionarioREST.RespuestaREST () { //esto sera llamado cuando llegue la respuesta de la petición
                    @Override
                    public void callback(int codigo, String cuerpo) {
                        elTexto.setText ("codigo respuesta= " + codigo + " <-> \n" + cuerpo); //campo de texto en la pantalla del android para mostrar en pantalla
                    } //lo de dentro del public void es el callback
                }
        );}
    // pulsado ()

    //-------------------------------------------------------------------------
    //-------------------------------------------------------------------------
    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.menu_main, menu);
        return true;
    }

} // class
