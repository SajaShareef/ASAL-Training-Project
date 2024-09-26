using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using HopeLearnBridge.DataStorage;
using HopeLearnBridge.Handlers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.Cosmos;
using System.Text;

var builder = WebApplication.CreateBuilder(args);
var isLocal = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT") == "Local";
var jwtSettings = builder.Configuration.GetSection("JWT");
var secretKey = jwtSettings["SecretKey"];
var issuer = jwtSettings["Issuer"];
var audience = jwtSettings["Audience"];
builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
})
.AddJwtBearer(options =>
{
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,
        ValidIssuer = issuer,
        ValidAudience = audience,
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secretKey ?? ""))
    };
});
builder.Services.Configure<JwtSettings>(builder.Configuration.GetSection("JWT"));
builder.Services.AddControllers();
builder.Services.AddApiVersioning(options =>
{
    options.AssumeDefaultVersionWhenUnspecified = true;
    options.DefaultApiVersion = new ApiVersion(1, 0);
    options.ReportApiVersions = true;
});
builder.Services.AddSingleton<IDataStorage, CosmosDataStorage>();
builder.Services.AddSingleton<CosmosClient>(sp =>
{
    var configuration = sp.GetRequiredService<IConfiguration>();
    var cosmosDbConfig = configuration.GetSection("CosmosDB");
    var account = cosmosDbConfig["Account"];
    var key = cosmosDbConfig["Key"];
    return new CosmosClient(account, key);
});
builder.Services.AddSingleton<ICoursesHandler, CoursesHandler>();
builder.Services.AddSingleton<IUsersHandler, UsersHandler>();
builder.Services.AddSingleton<IJwtHandler, JwtHandler>();
builder.Services.AddSingleton<IEmailHandler, EmailHandler>();
builder.Services.AddSingleton<IStudentsHandler, StudentsHandler>();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();
// Configure the HTTP request pipeline.
if (isLocal)
{
    app.UseSwagger();
    app.UseSwaggerUI();
    app.UseCors(builder =>
    {
        builder
        .AllowAnyOrigin()
        .AllowAnyMethod()
        .AllowAnyHeader();
    });
}

app.UseHttpsRedirection();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();