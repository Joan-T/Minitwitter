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
import android.widget.TextView;

//-----------------------------------------------------------------------------
// La interfaz grafica es un botón y un campo de texto para comprobar que funciona.
//-----------------------------------------------------------------------------

public class MainActivity extends ActionBarActivity {

    private TextView elTexto;
    private Button elBotonEnviar;

    //-------------------------------------------------------------------------
    //-------------------------------------------------------------------------
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);


        this.elTexto = (TextView) findViewById(R.id.elTexto);
        this.elBotonEnviar = (Button) findViewById(R.id.botonEnviar);


        Log.d("clienterestandroid", "fin onCreate()");
    }


    //-------------------------------------------------------------------------
    //-------------------------------------------------------------------------
    public void boton_enviar_pulsado (View quien) {
        Log.d("clienterestandroid", "boton_enviar_pulsado");
        this.elTexto.setText("pulsado");

        // ojo: creo que hay que crear uno nuevo cada vez
        PeticionarioREST elPeticionario = new PeticionarioREST();

        // verbo de la petición (GET), donde se quiere enviar (url)(hay que sacar la dirección IP de donde se ejecuta el servidor, ip config)
        // null es lo que se copiaria en la carga y como es asincrono hay que poner un callback.
        elPeticionario.hacerPeticionREST("GET",  "http://158.42.144.126:8080/usuario/12341234", null,
                new PeticionarioREST.RespuestaREST () { //esto sera llamado cuando llegue la respuesta de la petición
                    @Override
                    public void callback(int codigo, String cuerpo) {
                        elTexto.setText ("codigo respuesta= " + codigo + " <-> \n" + cuerpo); //campo de texto en la pantalla del android para mostrar en pantalla
                    } //lo de dentro del public void es el callback
                }
        );

        // (int codigo, String cuerpo) -> { elTexto.setText ("lo que sea"=; }

        /*

		/* otro ejemplo:
		elPeticionario.hacerPeticionREST("PUT", "http://192.168.1.113:8080/persona",
				"{\"dni\": \"A9182342W\", \"nombre\": \"Android\", \"apellidos\": \"De Los Palotes\"}",
				new PeticionarioREST.RespuestaREST () {
					@Override
					public void callback(int codigo, String cuerpo) {
						elTexto.setText ("cdigo respuesta: " + codigo + " <-> \n" + cuerpo);
					}
		});
		*/

    } // pulsado ()

    //-------------------------------------------------------------------------
    //-------------------------------------------------------------------------
    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.menu_main, menu);
        return true;
    }

} // class
