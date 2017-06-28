package com.edalac.ws.impl;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/saludo")
public class SaludoWS {

	@GET
	@Path("/{param}")
	public Response getSaludo(@PathParam("param") String param){
		String mensaje = "Hola "+ param;
		
		return Response.status(200).entity(mensaje).build();
	}
	
	@GET
	@Path("/saludo2/{param}")
	@Produces(MediaType.APPLICATION_JSON)
	public String getSaludo2(@PathParam("param") String param){
		String mensaje = "Este es otro saludo "+param;
		
		return mensaje;
	}
}

